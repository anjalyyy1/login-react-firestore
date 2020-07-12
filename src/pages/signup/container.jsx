import React, { Component } from "react";
import Signup from "./index";
import { get, each } from "lodash";

import ValidationUtils from "utils/validationUtils";
import UI_STRINGS from "utils/stringConstants";
import { connect } from "react-redux";
import { userSignupHandler } from "./ducks";
import ToastUtils from "utils/handleToast";

const mapStateToProps = state => {
  const {
    RECEIVE_SIGNUP_FAILURE,
    RECEIVE_SIGNUP_SUCCESS,
    REQUEST_USER,
    firebase
  } = state;

  return {
    ...firebase,
    ...RECEIVE_SIGNUP_FAILURE,
    ...RECEIVE_SIGNUP_SUCCESS,
    ...REQUEST_USER
  };
};

const mapDispatchToProps = { userSignupHandler };

class SignupPage extends Component {
  state = {
    hideTopMargin: true,
    form: {
      profilePicture: {
        value: "",
        error: "",
        label: "Profile Picture",
        type: "text",
        fieldType: "image"
      },
      firstName: {
        value: "",
        error: "",
        className: "halfWidth",
        label: "First Name",
        type: "text",
        fieldType: "input"
      },
      lastName: {
        value: "",
        error: "",
        className: "halfWidth marginLeft",
        label: "Last Name",
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
        className: "halfWidth",
        label: "Password",
        fieldType: "input",
        type: "password"
      },
      confirmPassword: {
        value: "",
        error: "",
        label: "Confirm Password",
        className: "halfWidth marginLeft",
        fieldType: "input",
        type: "password"
      },
      age: {
        value: "",
        error: "",
        label: "Age",
        className: "halfWidth",
        type: "text",
        fieldType: "input"
      },
      phoneNumber: {
        value: "",
        error: "",
        className: "halfWidth marginLeft",
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
      }
    }
  };

  /**
   *handle validation for form fields
   * @returns {String} appropriate error message
   */
  handleValidation = (value, fieldType, field) => {
    const { form } = this.state;

    if (ValidationUtils.checkIfEmptyField(value)) {
      return UI_STRINGS.EMPTY_FIELD_ERROR_MESSAGE;
    } else if (
      ValidationUtils.checkIfWhiteSpace(value) &&
      fieldType !== "image"
    ) {
      return UI_STRINGS.WHITE_SPACE_ERROR_MESSAGE;
    } else if (
      get(field, `label`) === "Phone Number" &&
      !ValidationUtils.validateContactNumber(value) &&
      fieldType !== "image"
    ) {
      return UI_STRINGS.VALID_CONTACT_NUMBER;
    } else if (
      get(field, `label`) === "Age" &&
      !ValidationUtils.validateNumber(value) &&
      fieldType !== "image"
    ) {
      return UI_STRINGS.VALID_NUMBER;
    } else if (
      get(field, `label`) === "Confirm Password" &&
      value !== get(form, `password.value`) &&
      fieldType !== "image"
    ) {
      return UI_STRINGS.PASSWORD_CONFIRM_PASSWORD_MATCH_ERROR;
    } else if (
      get(field, `label`) === "Password" &&
      !ValidationUtils.validatePassword(value)
    ) {
      return UI_STRINGS.VALID_PASSWORD;
    } else if (
      get(field, `label`) === "Enter email" &&
      !ValidationUtils.validateEmail(value)
    ) {
      return UI_STRINGS.VALID_EMAIL;
    }

    return null;
  };

  componentDidMount() {
    if (localStorage.getItem("isUserLoggedIn")) {
      this.props.history.push("/profile");
    }
  }

  /**
   * check if form fields are valid or not
   * @returns Boolean stating whether fields are valid or not
   */
  checkIfFieldsAreValid = () => {
    let { form } = this.state;
    let isFieldValid = true;

    each(form, eachField => {
      eachField.error = this.handleValidation(
        get(eachField, `value`),
        get(eachField, `fieldType`),
        eachField
      );
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
    if (!this.checkIfFieldsAreValid()) {
      ToastUtils.handleToast({
        operation: "error",
        message: "Please enter valid details."
      });
      return;
    }
    const { form } = this.state;

    const postData = {
      email: get(form, `email.value`),
      password: get(form, `password.value`),
      firstName: get(form, `firstName.value`),
      lastName: get(form, `lastName.value`),
      age: get(form, `age.value`),
      phoneNumber: get(form, `phoneNumber.value`),
      address: get(form, `address.value`),
      profilePicture: get(form, `profilePicture.value`)
    };

    await this.props.userSignupHandler(postData);
    const { isUserSignedUp } = this.props;
    if (isUserSignedUp) {
      localStorage.setItem("isUserLoggedIn", true);
      this.props.history.push("/profile");
    }
  };

  handleInputChange = (e, fieldIndex, fieldType, eachField) => {
    let error;
    if (fieldType !== "image") {
      error = this.handleValidation(e.target.value, fieldType, eachField);
    }

    let { form } = this.state;
    form[fieldIndex].value = fieldType === "image" ? e : e.target.value;
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
