import React from "react";
import { map, get } from "lodash";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// components
import InputField from "components/inputfield";
import Button from "components/button";
import BackgroundWrapper from "components/backgroundWrapper";

const Signup = props => {
  let { form, handleInputChange } = props;

  return (
    <div>
      Sign up
      {map(form, (eachField, index) => {
        return (
          <InputWrapper key={index}>
            <InputField
              fieldKey={index}
              label={get(eachField, `label`)}
              value={get(eachField, `value`)}
              width="50%"
              error={get(eachField, `error`)}
              handleInputChange={e => handleInputChange(e, index)}
              type={get(eachField, `type`)}
              fieldType={get(eachField, `fieldType`)}
            />
          </InputWrapper>
        );
      })}
      <Button label="Sign up" width="50%" />
      <span>
        Already have an account?
        <NavLink to="/">Login to your account</NavLink>
      </span>
    </div>
  );
};

const InputWrapper = styled.div``;

const PageWrapper = styled.div``;

const FormWrapper = styled.div``;

export default BackgroundWrapper(Signup);
