import React, { Component } from "react";
import Signup from "./index";
import { get, each } from "lodash";

import ValidationUtils from "utils/validationUtils";
import UI_STRINGS from "utils/stringConstants";
import { connect } from "react-redux";
import { userSignupHandler } from "./services";

const mapStateToProps = state => {
  const {
    RECEIVE_SIGNUP_FAILURE,
    RECEIVE_SIGNUP_SUCCESS,
    REQUEST_USER
  } = state;

  return {
    ...RECEIVE_SIGNUP_FAILURE,
    ...RECEIVE_SIGNUP_SUCCESS,
    ...REQUEST_USER
  };
};

const mapDispatchToProps = { userSignupHandler };

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
        label: "Profile Picture",
        type: "text",
        fieldType: "input"
      }
    }
  };

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

  /**
   * check if form fields are valid or not
   * @returns Boolean stating whether fields are valid or not
   */
  checkIfFieldsAreValid = () => {
    let { form } = this.state;
    let isFieldValid = true;

    each(form, eachField => {
      eachField.error = this.handleValidation(get(eachField, `value`));
      if (eachField.error) {
        isFieldValid = false;
      }
    });

    this.setState({
      form
    });

    return isFieldValid;
  };

  signupHandler = async () => {
    if (!this.checkIfFieldsAreValid()) return;
    const { form } = this.state;

    const postData = {
      email: get(form, `email.value`),
      password: get(form, `password.value`),
      firstName: get(form, `firstName.value`),
      lastName: get(form, `lastName.value`),
      age: get(form, `age.value`),
      phoneNumber: get(form, `phoneNumber.value`),
      address: get(form, `address.value`)
    };

    await this.props.userSignupHandler(postData);

    console.log(this.props.userDetails, "userDetails");
  };

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

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
