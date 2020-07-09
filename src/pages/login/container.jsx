import React, { Component } from "react";
import Login from "./index";

import ValidationUtils from "utils/validationUtils";
import UI_STRINGS from "utils/stringConstants";

class LoginPage extends Component {
  state = {
    form: {
      email: {
        value: "",
        error: "",
        label: "Enter email",
        type: "text",
        fieldType: "input"
      },
      password: {
        value: "",
        error: "",
        label: "Enter your password",
        fieldType: "input",
        type: "password"
      }
    }
  };

  componentDidMount() {}

  /**
   *handle validation for form fields
   * @returns {String} appropriate error message
   */
  handleValidation = value => {
    if (ValidationUtils.checkIfEmptyField(value)) {
      return UI_STRINGS.EMPTY_FIELD_ERROR_MESSAGE;
    } else if (ValidationUtils.checkIfWhiteSpace(value)) {
      return UI_STRINGS.WHITE_SPACE_ERROR_MESSAGE;
    } else if (ValidationUtils.checkIfspecialChar(value)) {
      return UI_STRINGS.SPECIAL_CHAR_ERROR_MESSAGE;
    }

    return null;
  };

  loginHandler = () => {};

  handleInputChange = (e, fieldIndex) => {
    let error = this.handleValidation(e.target.value);

    let { form } = this.state;
    form[fieldIndex].value = e.target.value;
    form[fieldIndex].error = error;

    this.setState({
      form
    });
  };

  render() {
    /** Merge States and Methods */
    const stateMethodProps = {
      ...this,
      ...this.state,
      ...this.props
    };

    return <Login {...stateMethodProps} />;
  }
}

export default LoginPage;
