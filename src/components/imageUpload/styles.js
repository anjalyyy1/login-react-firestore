import styled from "styled-components";

export const ImageUploadWrapper = styled.div`
  margin-bottom: 28px;
`;

export const ImageInput = styled.input`
  visibility: hidden;
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: auto;
  display: block;
  max-width: 200px;
  max-height: 150px;
  border: 6px solid #1398c4;
`;

export const ImagePreviewWrapper = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
`;

export const DefaultImageWrapper = styled.div``;

export const DefaultImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 50%;
`;

export const EditImage = styled.img`
  width: 27px;
  height: 27px;
  position: absolute;
  bottom: 9px;
  right: 7px;
  border-radius: 50%;
  background-color: ${props => props.theme.COLOR.WHITE};
  cursor: pointer;
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  position: absolute;
  margin-top: 5px;
  left: 0;
  margin-left: 49px;
  color: ${props => props.theme.COLOR.ERROR};
`;
