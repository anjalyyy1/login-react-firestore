import React, { useState, useEffect } from "react";
import {
  ImageUploadWrapper,
  ImageInput,
  ImagePreview,
  ImagePreviewWrapper
} from "./styles";

const ImageUpload = props => {
  const { handleInputChange, fieldIndex, imageDetail } = props;
  const [imageFile, setImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(imageDetail);

  useEffect(() => {
    setImagePreviewUrl(imageDetail);
  }, []);

  const handleImageChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImage(file);
      setImagePreviewUrl(reader.result);
      handleInputChange(file, fieldIndex, "image");
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <ImageUploadWrapper>
        <ImageInput
          type="file"
          accept="image/*"
          id="upload"
          onChange={handleImageChange}
        />
        <ImagePreviewWrapper>
          <ImagePreview src={imagePreviewUrl} />
        </ImagePreviewWrapper>
      </ImageUploadWrapper>
    </>
  );
};

export default ImageUpload;
