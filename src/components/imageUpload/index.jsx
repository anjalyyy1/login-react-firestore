import React, { useState, useEffect } from "react";
import {
  ImageUploadWrapper,
  ImageInput,
  ImagePreview,
  ImagePreviewWrapper,
  DefaultImageWrapper,
  DefaultImage,
  EditImage,
  ErrorMessage
} from "./styles";
import AppImages from "images";

import ValidationUtils from "utils/validationUtils";
import ToastUtils from "utils/handleToast";

const ImageUpload = props => {
  const { handleInputChange, fieldIndex, imageDetail, error } = props;
  const [imagePreviewUrl, setImagePreviewUrl] = useState(imageDetail);

  useEffect(() => {
    setImagePreviewUrl(
      typeof imageDetail !== "object" ? imageDetail : imagePreviewUrl
    );
  }, [imageDetail]);

  const handleImageChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    if (!ValidationUtils.validateImageFile(file)) {
      ToastUtils.handleToast({
        operation: "error",
        message: "Please enter a valid file."
      });
      return;
    }

    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
      handleInputChange(file, fieldIndex, "image");
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <ImageUploadWrapper className="image-upload">
        <ImageInput
          type="file"
          accept="image/*"
          id="upload"
          onChange={handleImageChange}
        />

        <ImagePreviewWrapper>
          {imagePreviewUrl ? (
            <ImagePreview src={imagePreviewUrl} />
          ) : (
            <DefaultImageWrapper>
              <DefaultImage src={AppImages.SignUpUserImage} />
            </DefaultImageWrapper>
          )}
          <EditImage
            onClick={() => document.querySelector("#upload").click()}
            src={AppImages.Edit}
          />
        </ImagePreviewWrapper>
        <ErrorMessage>{error}</ErrorMessage>
      </ImageUploadWrapper>
    </>
  );
};

export default ImageUpload;
