import React from "react";
import { map, get } from "lodash";

// components
import InputField from "components/inputfield";
import Button from "components/button";
import BackgroundWrapper from "components/backgroundWrapper";
import ImageUpload from "components/imageUpload";
import FullPageLoader from "components/fullPageLoader";

//styles

import {
  InputWrapper,
  PageWrapper,
  Heading,
  LogoutButtonWrapper
} from "./styles";

const Profile = props => {
  let {
    form,
    handleInputChange,
    updateProfileHandler,
    isProfileEdited,
    onSignout,
    auth,
    isUserLoading
  } = props;

  return (
    <PageWrapper>
      {(auth.isEmpty || isUserLoading) && <FullPageLoader />}
      <Heading>Welcome !</Heading>
      <LogoutButtonWrapper>
        <Button label="Logout" width="50%" onClickHandler={onSignout} />
      </LogoutButtonWrapper>
      {map(form, (eachField, index) => {
        const formField = (
          <div key={index}>
            {get(eachField, `fieldType`) !== "image" ? (
              <InputWrapper>
                <InputField
                  fieldKey={index}
                  label={get(eachField, `label`)}
                  value={get(eachField, `value`, "")}
                  width="100%"
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
              </InputWrapper>
            ) : (
              <>
                <ImageUpload
                  handleInputChange={handleInputChange}
                  fieldIndex={index}
                  imageDetail={get(eachField, `value`)}
                />
              </>
            )}
          </div>
        );

        return formField;
      })}
      <Button
        label="Update"
        width="50%"
        onClickHandler={updateProfileHandler}
        disabled={!isProfileEdited}
      />
    </PageWrapper>
  );
};

export default BackgroundWrapper(Profile);
