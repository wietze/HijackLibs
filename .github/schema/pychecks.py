import glob
import sys
import os
import re
from datetime import date
from typing import List, Optional

import yaml
from pydantic import BaseModel, HttpUrl, ValidationError, conlist, constr, ConfigDict, model_validator

str_non_empty = constr(strip_whitespace=True, min_length=1, pattern=r"[^ ]+", strict=True)


class Acknowledgement(BaseModel):
    model_config = ConfigDict(extra='forbid')

    Name: constr(pattern=r"^\w[\w\s\-'']+\w$")
    Company: str_non_empty = None
    Twitter: Optional[constr(pattern=r"^@(\w){1,15}$")] = None


class VersionInformation(BaseModel):
    model_config = ConfigDict(extra='forbid')

    CompanyName: str_non_empty = None
    FileDescription: str_non_empty = None
    FileVersion: str_non_empty = None
    InternalName: str_non_empty = None
    LegalCopyright: str_non_empty = None
    OriginalFilename: str_non_empty = None
    ProductName: str_non_empty = None
    ProductVersion: str_non_empty = None


class SignatureInformation(BaseModel):
    model_config = ConfigDict(extra='forbid')

    Subject: constr(pattern=r'^(?i)((CN|C|O|L|C|OU|S|ST|STREET|PostalCode|SERIALNUMBER|OID(\.\d+)+)=(".+?"|''.+?''|([^,]|\\,)+?)(,\s*|$))+$') = None
    Issuer: constr(pattern=r'^(?i)((CN|C|O|L|C|OU|S|ST|STREET|PostalCode|SERIALNUMBER|OID(\.\d+)+)=(".+?"|''.+?''|([^,]|\\,)+?)(,\s*|$))+$') = None
    Type: constr(pattern=r"^(Authenticode|Catalog)$")


class VulnerableExecutables(BaseModel):
    model_config = ConfigDict(extra='forbid')

    Path: constr(pattern=r"^[ a-zA-Z0-9&_\-\+\\%\.\(\):]+$")
    Type: constr(pattern=r"^(Sideloading|Phantom|Search Order|Environment Variable)$")
    AutoElevate: bool = None
    PrivilegeEscalation: bool = None
    Condition: str_non_empty = None
    SHA256: conlist(constr(pattern=r"^[a-zA-Z0-9]{64}$")) = None
    Variable: str_non_empty = None
    ExpectedVersionInformation: Optional[conlist(VersionInformation)] = None
    ExpectedSignatureInformation: conlist(SignatureInformation) = None

    @model_validator(mode='after')
    def environment_variable_fields(self) -> "VulnerableExecutables":
        if self.Type == "Environment Variable" and not self.Variable:
            raise AssertionError("'Variable' must be specified when 'Type' is set to 'Environment Variable'.")
        if self.Type != 'Environment Variable' and self.Variable:
            raise AssertionError("'Variable' must only be specified if 'Type' is set to 'Environment Variable'.")
        if self.Variable and '%' in self.Variable:
            raise AssertionError("'Variable' should contain the Environment Variable name without percentage signs (%).")
        return self


class Entry(BaseModel):
    model_config = ConfigDict(extra='forbid')

    Name: constr(pattern=r"^[a-z0-9_\-\.]+\.(dll|ocx|cpl)$")
    Author: constr(pattern=r"^\w[\w\s\-'',]+\w$")
    Created: date
    Vendor: constr(pattern=r"^\w[\w|\s|\-|\+]*[\w|\+]$")
    CVE: Optional[constr(pattern=r"^CVE-\d{4}-\d{3,}$")] = None

    ExpectedVersionInformation: Optional[conlist(VersionInformation)] = None
    ExpectedSignatureInformation: conlist(SignatureInformation) = None

    ExpectedLocations: Optional[conlist(constr(pattern=r"^[%cC][ a-zA-Z0-9&_\-\+\\%\.\(\):]+$"))] = None

    VulnerableExecutables: conlist(VulnerableExecutables)

    Resources: Optional[List[HttpUrl]] = None
    Acknowledgements: Optional[List[Acknowledgement]] = None

    @model_validator(mode='after')
    def vt_redundancy(self) -> "VulnerableExecutables":
        if self.Resources and any(x.SHA256 for x in self.VulnerableExecutables):
            hashes = [file_hash for exe in self.VulnerableExecutables if exe.SHA256 for file_hash in exe.SHA256 ]
            vt_urls = [str(resource) for resource in self.Resources if 'virustotal.com' in str(resource)]
            for url in vt_urls:
                if any(f"virustotal.com/gui/file/{hash}" in url for hash in hashes):
                    raise AssertionError(f"Resource '{url}' redundant, as corresponding file hash is already included. Please remove this resource.")
        return self


def find_line_number(object: str, path: list[str|int]):
    try:
        index_count = -1
        for i, line in enumerate(object.split('\n'), start=1):
            if isinstance(path[0], int):
                if re.findall(f'^\\s*-', line):
                    index_count += 1
                    if index_count == path[0]:
                        path.pop(0)
            elif re.match(rf'^\s*{re.escape(path[0])}:', line):
                path.pop(0)
                index_count = -1
            if not path:
                return i
    except:
        pass
    return 1


if __name__ == "__main__":
    if len(sys.argv) != 2:
        raise Exception("Unexpected argument count")
    path = sys.argv[1]
    errors = []
    for file_path in glob.glob(sys.argv[1], recursive=True):
        with open(file_path, encoding='utf-8') as f:
            try:
                data = yaml.safe_load(contents := f.read())
            except:
                raise Exception("Could not parse YAML")

            try:
                entry = Entry.model_validate(data, strict=True)

                file_path_split = os.path.normpath(file_path).split(os.path.sep)
                vendor_type, vendor, filename = file_path_split[-3:]

                if filename.lower() != filename or vendor.lower() != vendor:
                    raise AssertionError("File name and file path must be completely lowercase.")
                if not vendor_type in ('microsoft', '3rd_party'):
                    raise AssertionError("Unexpected vendor type.")
                if vendor_type == 'microsoft' and vendor not in ('built-in', 'external'):
                    raise AssertionError("Unexpected type for Microsoft entry.")

                if (entry_name := entry.Name.replace('.dll', '.yml').replace('.ocx', '.yml').replace('.cpl', '.yml')) != filename:
                    raise AssertionError(f"File name {filename} does not match 'Name' field {entry_name}.")
                vendor_name = entry.Vendor.replace(' ', '')
                if vendor_name.lower() != (vendor if vendor_type == '3rd_party' else vendor_type):
                    raise AssertionError("Vendor folder name does not match 'Vendor' field.")

            except ValidationError as e:
                error_messages = []
                for error in e.errors():
                    error_messages.append(f"{error['msg']}: {'.'.join(str(y) for y in error['loc'])}")
                    errors.append({'file': file_path, 'line': find_line_number(contents, [x for x in error['loc']]) if error['loc'] else 1, 'message': f"{error['msg']}: {'.'.join(str(y) for y in error['loc'])}", 'title': error['type']})
                print("> {}".format(file_path))
                print(f"  {data}")
                print(f"  ERROR: {', '.join(error_messages)}")

            except AssertionError as e:
                print("> {}".format(file_path))
                print(f"  {data}")
                print(f"  ERROR: {e}")
                errors.append({'file': file_path, 'line': 1, 'message': f"{e}", 'title': type(e).__name__})

    if errors:
        print("")

        def escaper(x): return x.replace('%', '%25').replace('\r', '%0D').replace('\n', '%0A')
        for error in errors:
            print(f"::error file={error['file']},line={error['line']},title={error['title']}::{escaper(error['message'])}")
        sys.exit(-1)
