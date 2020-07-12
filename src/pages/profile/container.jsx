import React, { Component } from "react";
import { connect } from "react-redux";
import { each, get, isEqual } from "lodash";

// utils
import ValidationUtils from "utils/validationUtils";
import UI_STRINGS from "utils/stringConstants";
import { getKeyByValue } from "utils/getKeyByValue";

// components
import Profile from "./index";

//services
import { updateUserDocument, signoutUser } from "./ducks";

const mapStateToProps = state => {
  const { RECEIVE_SIGNUP_SUCCESS, firebase, REQUEST_USER } = state;
  return {
    ...firebase,
    ...RECEIVE_SIGNUP_SUCCESS,
    ...REQUEST_USER
  };
};

const mapDispatchToProps = { updateUserDocument, signoutUser };

class ProfilePage extends Component {
  state = {
    isProfileEdited: false,
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
        label: "First Name",
        type: "text",
        fieldType: "input"
      },
      lastName: {
        value: "",
        error: "",
        label: "Last Name",
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

  setFormDetails = profileDetails => {
    const { form } = this.state;
    each(form, eachField => {
      eachField["value"] = profileDetails[getKeyByValue(form, eachField)];
    });

    this.setState({
      form
    });
  };

  /**
   *handle validation for form fields
   * @returns {String} appropriate error message
   */
  handleValidation = (value, fieldType, field) => {
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

  updateProfileHandler = async () => {
    const { form, isProfileEdited } = this.state;
    if (!isProfileEdited) return;

    // donot update if there are any errors

    if (!this.checkIfFieldsAreValid()) return;

    const postData = {
      firstName: get(form, `firstName.value`),
      lastName: get(form, `lastName.value`),
      age: get(form, `age.value`),
      phoneNumber: get(form, `phoneNumber.value`),
      address: get(form, `address.value`),
      profilePicture: get(form, `profilePicture.value`)
    };

    this.props.updateUserDocument(postData, this.props.auth.uid);
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
      form,
      isProfileEdited: true
    });
  };

  onSignout = async () => {
    await this.props.signoutUser();
    localStorage.removeItem("isUserLoggedIn");
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
