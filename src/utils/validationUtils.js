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
    let regEx = /\.(jpeg|jpg|png|gif)$/i;

    return file && regEx.test(file.name);
  };
}

export default new ValidationUtils();
