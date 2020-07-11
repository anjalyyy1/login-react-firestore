import React, { Component } from "react";
import Profile from "./index";

import ValidationUtils from "utils/validationUtils";
import UI_STRINGS from "utils/stringConstants";

import { connect } from "react-redux";
import { each, get, isEqual } from "lodash";
//services
import { updateUserDocument, signoutUser } from "./services";

const mapStateToProps = state => {
  const { RECEIVE_SIGNUP_SUCCESS, firebase } = state;
  return {
    ...firebase,
    ...RECEIVE_SIGNUP_SUCCESS
  };
};

const mapDispatchToProps = { updateUserDocument, signoutUser };

class ProfilePage extends Component {
  state = {
    isProfileEdited: false,
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
        fieldType: "image"
      }
    }
  };

  componentDidMount() {
    const profile = get(this.props, `profile`);

    if (get(this.props, `profile`)) {
      this.setFormDetails(profile);
    }
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(get(this.props, `profile`), get(prevProps, `profile`))) {
      this.setFormDetails(get(this.props, `profile`));
    }
  }

  getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
  };

  setFormDetails = profileDetails => {
    const { form } = this.state;
    each(form, eachField => {
      eachField["value"] = profileDetails[this.getKeyByValue(form, eachField)];
    });

    this.setState({
      form
    });
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

  updateProfileHandler = async () => {
    const { form, isProfileEdited } = this.state;
    // if (!isProfileEdited) return;

    // if (!this.checkIfFieldsAreValid()) return;

    const postData = {
      firstName: get(form, `firstName.value`),
      lastName: get(form, `lastName.value`),
      age: get(form, `age.value`),
      phoneNumber: get(form, `phoneNumber.value`),
      address: get(form, `address.value`),
      profilePicture: get(form, `profilePicture.value`)
    };

    await this.props.updateUserDocument(postData, this.props.auth.uid);
  };

  handleInputChange = (e, fieldIndex) => {
    let error = this.handleValidation(e.target.value);

    let { form } = this.state;
    form[fieldIndex].value = e.target.value;
    form[fieldIndex].error = error;

    this.setState({
      form,
      isProfileEdited: true
    });
  };

  onSignout = async () => {
    await this.props.signoutUser();
    this.props.history.push("/");
  };

  render() {
    /** Merge States and Methods */
    const stateMethodProps = {
      ...this,
      ...this.state,
      ...this.props
    };

    return <Profile {...stateMethodProps} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
