import React from "react";
import { map, get } from "lodash";
import styled from "styled-components";

// components
import InputField from "components/inputfield";
import Button from "components/button";
import BackgroundWrapper from "components/backgroundWrapper";
import ImageUpload from "components/imageUpload";

// address: "4234234"
// age: "4234"
// email: "anny123@gmail.com"
// firstName: "Anjali"
// isEmpty: false
// isLoaded: true
// lastName: "Gupta"
// phoneNumber: "43242"
// profilePicture:"https://firebasestorage.googleapis.com/v0/b/login-react-firestore.appspot.com/o/images%2Fegg-cress-club-sandwich_0.jpg?alt=media&token=a00e162a-dbb1-4294-8413-68bc3a78eddc"

const Profile = props => {
  let {
    form,
    handleInputChange,
    updateProfileHandler,
    isProfileEdited,
    onSignout
  } = props;

  console.log(props);
  return (
    <PageWrapper>
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
                  handleInputChange={e => handleInputChange(e, index)}
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
        // disabled={isProfileEdited}
      />
      <Button label="Logout" width="50%" onClickHandler={onSignout} />
    </PageWrapper>
  );
};

const InputWrapper = styled.div``;

const PageWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;
`;

const FormWrapper = styled.div``;

export default BackgroundWrapper(Profile);
