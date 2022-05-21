import logging
log = logging.getLogger(__name__)
log.setLevel("DEBUG")

def check_executables(value, rule_obj, path):
    log.debug("value: %s", value)
    log.debug("rule_obj: %s", rule_obj)
    log.debug("path: %s", path)

    if value.get("Type") == "Environment Variable" and not value.get("Variable"):
        raise AssertionError("'Variable' must be specified when 'Type' is set to 'Environment Variable'.")
    if value.get("Type") != "Environment Variable" and value.get("Variable"):
        raise AssertionError("'Variable' must only be specified if 'Type' is set to 'Environment Variable'.")
    if value.get("Variable") and '%' in value.get("Variable"):
        raise AssertionError("'Variable' should contain the Environment Variable name without percentage signs (%).")

    return not_empty(value, rule_obj, path)

def not_empty(value, rule_obj, path):
    log.debug("value: %s", value)
    log.debug("rule_obj: %s", rule_obj)
    log.debug("path: %s", path)
    if isinstance(value, dict):
        empties = [key for key, val in value.items() if not val]
        if empties:
            result = []
            for empty in empties:
                is_required = rule_obj.schema_str['mapping'][empty].get('required', False)

                message = 'Key "{}" cannot be empty; '.format(empty)
                if not is_required:
                    message += 'please remove the entire line'
                else:
                    message += 'is required'
                result.append(message)
            raise AssertionError('\n'.join(result))
    else:
        raise ValueError('Unexpected value type {}'.format(type(value)))
    return True
