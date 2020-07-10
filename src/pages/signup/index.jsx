import React from "react";
import { map, get } from "lodash";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// components
import InputField from "components/inputfield";
import Button from "components/button";
import BackgroundWrapper from "components/backgroundWrapper";

const Signup = props => {
  let { form, handleInputChange, signupHandler } = props;

  return (
    <PageWrapper>
      Sign up
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
      <Button label="Sign up" width="50%" onClickHandler={signupHandler} />
      <LoginLink>
        Already have an account?
        <NavLink to="/">Login to your account</NavLink>
      </LoginLink>
    </PageWrapper>
  );
};

const LoginLink = styled.div``;

const InputWrapper = styled.div``;

const PageWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;
`;

const FormWrapper = styled.div``;

export default BackgroundWrapper(Signup);
