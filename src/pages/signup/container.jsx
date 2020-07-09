import React, { Component } from "react";
import Signup from "./index";

import ValidationUtils from "utils/validationUtils";
import UI_STRINGS from "utils/stringConstants";

class SignupPage extends Component {
  state = {
    form: {
      firstName: {
        value: "",
        error: "",
        label: "First Name",
        type: "text",
        fieldType: "input"
      },
      lastName: {
        value: "",
        error: "",
        label: "Last Name",
        fieldType: "input",
        type: "text",
        fieldType: "input"
      },
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
        label: "Password",
        fieldType: "input",
        type: "password"
      },
      confirmPassword: {
        value: "",
        error: "",
        label: "Confirm Password",
        fieldType: "input",
        type: "password"
      },
      age: {
        value: "",
        error: "",
        label: "Age",
        type: "text",
        fieldType: "input"
      },
      phoneNumber: {
        value: "",
        error: "",
        label: "Phone Number",
        type: "text",
        fieldType: "input"
      },
      address: {
        value: "",
        error: "",
        label: "Address",
        type: "text",
        fieldType: "textarea"
      },
      profilePicture: {
        value: "",
        error: "",
        label: "Phone Number",
        type: "text",
        fieldType: "input"
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

    return <Signup {...stateMethodProps} />;
  }
}

export default SignupPage;
