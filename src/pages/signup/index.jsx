import React from "react";
import { map, get } from "lodash";
import { NavLink } from "react-router-dom";

// components
import InputField from "components/inputfield";
import Button from "components/button";
import BackgroundWrapper from "components/backgroundWrapper";
import ImageUpload from "components/imageUpload";
import AppImages from "images";

//styles
import {
  LoginLink,
  InputWrapper,
  PageWrapper,
  Fields,
  Heading,
  FormWrapper,
  ImageWrapper,
  SignupImageWrapper,
  SignupImage,
  SignupWrapper
} from "./styles";

const Signup = props => {
  let { form, handleInputChange, signupHandler } = props;

  return (
    <PageWrapper>
      <Heading>Sign up</Heading>
      <SignupWrapper>
        <FormWrapper>
          {map(form, (eachField, index) => {
            const formField = (
              <InputWrapper key={index}>
                {get(eachField, `fieldType`) !== "image" ? (
                  <>
                    <InputField
                      fieldKey={index}
                      label={get(eachField, `label`)}
                      value={get(eachField, `value`)}
                      width="100%"
                      className={get(eachField, `className`)}
                      error={get(eachField, `error`)}
                      handleInputChange={e =>
                        handleInputChange(
                          e,
                          index,
                          get(eachField, `fieldType`),
                          eachField
                        )
                      }
                      type={get(eachField, `type`)}
                      fieldType={get(eachField, `fieldType`)}
                    />
                  </>
                ) : (
                  <>
                    <ImageUpload
                      handleInputChange={handleInputChange}
                      fieldIndex={index}
                      error={get(eachField, `error`)}
                    />
                  </>
                )}
              </InputWrapper>
            );

            return formField;
          })}
          <Button label="Sign up" width="50%" onClickHandler={signupHandler} />
        </FormWrapper>
        <ImageWrapper>
          <SignupImageWrapper>
            <SignupImage src={AppImages.SignupImage} />
          </SignupImageWrapper>
          <LoginLink>
            <NavLink to="/">I am already a member</NavLink>
          </LoginLink>
        </ImageWrapper>
      </SignupWrapper>
    </PageWrapper>
  );
};

export default BackgroundWrapper(Signup);
