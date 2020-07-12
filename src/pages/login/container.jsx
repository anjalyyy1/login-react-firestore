import React, { Component } from "react";
import { each, get } from "lodash";
import { connect } from "react-redux";

// components
import Login from "./index";

//utils
import ValidationUtils from "utils/validationUtils";
import UI_STRINGS from "utils/stringConstants";

//services
import { userLoginhandler } from "./ducks";

const mapStateToProps = state => {
  const { RECEIVE_USER_FAILURE, RECEIVE_USER_SUCCESS, REQUEST_USER } = state;

  return {
    ...RECEIVE_USER_FAILURE,
    ...RECEIVE_USER_SUCCESS,
    ...REQUEST_USER
  };
};

const mapDispatchToProps = { userLoginhandler };

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

  /**
   *handle validation for form fields
   * @returns {String} appropriate error message
   */
  handleValidation = (value, field) => {
    if (ValidationUtils.checkIfEmptyField(value)) {
      return UI_STRINGS.EMPTY_FIELD_ERROR_MESSAGE;
    } else if (ValidationUtils.checkIfWhiteSpace(value)) {
      return UI_STRINGS.WHITE_SPACE_ERROR_MESSAGE;
    }

    return null;
  };

  componentDidMount() {
    if (localStorage.getItem("isUserLoggedIn")) {
      this.props.history.push("/profile");
    }
  }

  /**
   * check if all the form fields are valid or not
   * @returns Boolean stating whether all fields are valid or not
   */
  checkIfFieldsAreValid = () => {
    let { form } = this.state;
    let isFieldValid = true;

    each(form, eachField => {
      eachField.error = this.handleValidation(
        get(eachField, `value`),
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

  loginHandler = async () => {
    if (!this.checkIfFieldsAreValid()) return;
    const { form } = this.state;
    const email = get(form, `email.value`);
    const password = get(form, `password.value`);

    await this.props.userLoginhandler(email, password);
    const { userProfileDetails } = this.props;

    // if logged in successfully show the profile
    if (userProfileDetails) {
      localStorage.setItem("isUserLoggedIn", true);
      this.props.history.push("/profile");
    }
  };

  handleInputChange = (e, fieldIndex, eachField) => {
    let error = this.handleValidation(e.target.value, eachField);

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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
