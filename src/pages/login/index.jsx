// libraries
import React from "react";
import { map, get } from "lodash";
import { NavLink } from "react-router-dom";

// components
import InputField from "components/inputfield";
import Button from "components/button";
import BackgroundWrapper from "components/backgroundWrapper";
import FullPageLoader from "components/fullPageLoader";
import AppImages from "images";
import {
  LoginImage,
  LoginImageWrapper,
  InputWrapper,
  SignupLink,
  PageWrapper,
  FormWrapper,
  Heading
} from "./styles.js";

const Login = props => {
  let { form, handleInputChange, loginHandler, isUserLoading } = props;

  return (
    <PageWrapper>
      {isUserLoading && <FullPageLoader />}
      <LoginImageWrapper>
        <LoginImage src={AppImages.LoginImage} />
      </LoginImageWrapper>
      <Heading>Welcome</Heading>

      <FormWrapper>
        {map(form, (eachField, index) => {
          return (
            <InputWrapper key={index}>
              <InputField
                fieldKey={index}
                label={get(eachField, `label`)}
                value={get(eachField, `value`)}
                width="100%"
                error={get(eachField, `error`)}
                handleInputChange={e => handleInputChange(e, index)}
                type={get(eachField, `type`)}
                fieldType={get(eachField, `fieldType`)}
              />
            </InputWrapper>
          );
        })}
        <Button label="Login" onClickHandler={loginHandler} width="50%" />
        <SignupLink>
          Not registered? <NavLink to="/signup">Create an account.</NavLink>
        </SignupLink>
      </FormWrapper>
    </PageWrapper>
  );
};

export default BackgroundWrapper(Login);
