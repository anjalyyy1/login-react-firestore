import { trim } from "lodash";

class ValidationUtils {
  checkIfspecialChar = value => {
    let regex = /[\\/=?`<>]/g;
    return regex.test(value);
  };

  checkIfEmptyField = value => {
    let re = /^$/;
    return re.test(value);
  };

  checkIfWhiteSpace = value => {
    if (typeof value !== "number" && value && trim(value).length === 0) {
      let re = /^\s/;
      return re.test(value);
    }
  };

  validateNumber = value => {
    let re = /^[0-9]*$/;
    return re.test(value);
  };

  validateFloatNumber = value => {
    let re = /^(\d*\.)?\d+$/gim;
    return re.test(value);
  };

  validateContactNumber = number => {
    let reg = /^(\+\d{1,2}\s?)?1?-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    return reg.test(number);
  };

  validateImageFile = file => {
    let regEx = /\.(jpeg|jpg|png|gif|svg)$/i;

    return file && regEx.test(file.name);
  };

  validatePassword = password => {
    // Minimum eight characters, at least  one number:
    let regex = /^(?=.*\d).{8,}$/;
    return regex.test(password);
  };

  validateEmail = email => {
    let re = /^([a-z0-9.\-_]+@[a-z0-9]+(\.[a-z]+)?\.[a-z]+)$/i;
    return re.test(String(email).toLowerCase());
  };
}

export default new ValidationUtils();
