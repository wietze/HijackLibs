import glob
import sys
from datetime import date
from typing import List, Optional

import yaml
from pydantic import BaseModel, HttpUrl, ValidationError, conlist, constr

str_non_empty = constr(strip_whitespace=True, min_length=1,
                       pattern=r"[^ ]+", strict=True)


class Acknowledgement(BaseModel):
    Name: constr(pattern=r"^\w[\w\s\-'']+\w$")
    Twitter: Optional[constr(pattern=r"^@(\w){1,15}$")] = None


class VersionInformation(BaseModel):
    CompanyName: str_non_empty = None
    FileDescription: str_non_empty = None
    FileVersion: str_non_empty = None
    InternalName: str_non_empty = None
    LegalCopyright: str_non_empty = None
    OriginalFilename: str_non_empty = None
    ProductName: str_non_empty = None
    ProductVersion: str_non_empty = None


class SignatureInformation(BaseModel):
    Subject: constr(
        pattern=r'^(?i)((CN|C|O|L|C|OU|S|ST|STREET|PostalCode|SERIALNUMBER|OID(\.\d+)+)=(".+?"|''.+?''|([^,]|\\,)+?)(,\s*|$))+$') = None
    Issuer: constr(
        pattern=r'^(?i)((CN|C|O|L|C|OU|S|ST|STREET|PostalCode|SERIALNUMBER|OID(\.\d+)+)=(".+?"|''.+?''|([^,]|\\,)+?)(,\s*|$))+$') = None
    Type: constr(pattern=r"^(Authenticode|Catalog)$")


class VulnerableExecutables(BaseModel):
    Path: constr(pattern=r"^[ a-zA-Z0-9&_\-\+\\%\.\(\):]+$")
    Type: constr(
        pattern=r"^(Sideloading|Phantom|Search Order|Environment Variable)$")
    AutoElevate: bool = None
    PrivilegeEscalation: bool = None
    Condition: str_non_empty = None
    SHA256: conlist(constr(pattern=r"^[a-zA-Z0-9]{64}$")) = None
    Variable: str_non_empty = None
    ExpectedVersionInformation: Optional[conlist(VersionInformation)] = None
    ExpectedSignatureInformation: conlist(SignatureInformation) = None


class Entry(BaseModel):
    Name: constr(pattern=r"^[a-z0-9_\-\.]+\.(dll|ocx|cpl)$")
    Author: constr(pattern=r"^\w[\w\s\-'',]+\w$")
    Created: date
    Vendor: constr(pattern=r"^\w[\w|\s|\-|\+]*[\w|\+]$")
    CVE: Optional[constr(pattern=r"^CVE-\d{4}-\d{3,}$")] = None

    ExpectedVersionInformation: Optional[conlist(VersionInformation)] = None
    ExpectedSignatureInformation: conlist(SignatureInformation) = None

    ExpectedLocations: Optional[conlist(
        constr(pattern=r"^[%cC][ a-zA-Z0-9&_\-\+\\%\.\(\):]+$"))] = None

    VulnerableExecutables: conlist(VulnerableExecutables)

    Resources: Optional[List[HttpUrl]] = None
    Acknowledgements: Optional[List[Acknowledgement]] = None

    class Config:
        extra = 'forbid'


if __name__ == "__main__":
    if len(sys.argv) != 2:
        raise Exception("Unexpected argument count")
    path = sys.argv[1]
    errors = []
    for file_path in glob.glob(sys.argv[1], recursive=True):
        with open(file_path, encoding='utf-8') as f:
            try:
                data = yaml.safe_load(f)
            except:
                raise Exception("Could not parse YAML")

            try:
                Entry.model_validate(data, strict=True)
            except ValidationError as e:
                error_messages = []
                for error in e.errors():
                    error_messages.append(
                        f"{error['msg']}: {'.'.join(str(y) for y in error['loc'])}")
                    errors.append(
                        {'file': file_path, 'line': 1, 'message': f"{error['msg']}: {'.'.join(str(y) for y in error['loc'])}", 'title': error['type']})
                print("> {}".format(file_path))
                print(f"  {data}")
                print(f"  ERROR: {', '.join(error_messages)}")

    if errors:
        print("")

        def escaper(x): return x.replace('%', '%25').replace(
            '\r', '%0D').replace('\n', '%0A')
        for error in errors:
            print(
                f"::error file={error['file']},line={error['line']},title={error['title']}::{escaper(error['message'])}")
        sys.exit(-1)
