// libraries
import React from "react";
import { map, get } from "lodash";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// components
import InputField from "components/inputfield";
import Button from "components/button";
import BackgroundWrapper from "components/backgroundWrapper";
import FullPageLoader from "components/fullPageLoader";

const Login = props => {
  let { form, handleInputChange, loginHandler, isUserLoading } = props;
  console.log(isUserLoading, "isUserLoading");
  return (
    <PageWrapper>
      {isUserLoading && <FullPageLoader />}
      Login
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

const InputWrapper = styled.div``;

const SignupLink = styled.div``;

const PageWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;
`;

const FormWrapper = styled.div``;

export default BackgroundWrapper(Login);
