import React from "react";
import styled, { css } from "styled-components";

/**
 * Input Box
 */
const InputBox = ({
  label,
  id,
  handleInputChange,
  type,
  maxLength,
  defaultValue,
  width,
  fieldType,
  error,
  value
}) => {
  return (
    <FormGroup width={width}>
      <Label htmlFor={id}>{label}</Label>

      {fieldType === "input" && (
        <Input
          type={type}
          id={id}
          value={value}
          defaultValue={defaultValue}
          maxLength={maxLength}
          onChange={handleInputChange}
        />
      )}
      {fieldType === "textarea" && (
        <TextArea
          type={type}
          id={id}
          value={value}
          defaultValue={defaultValue}
          maxLength={maxLength}
          onChange={handleInputChange}
        />
      )}
      <ErrorMessage className="error-message-input">{error}</ErrorMessage>
    </FormGroup>
  );
};

const SharedLabelCss = css`
  opacity: 0.64;
  display: inline-block;
  margin-bottom: 6px;
  font-weight: bold;
  cursor: pointer;
  display: block;
  text-align: left;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
`;

const Label = styled.label`
  ${SharedLabelCss}
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  position: absolute;
  margin-top: 5px;
  left: 0;
  color: ${props => props.theme.COLOR.ERROR};
`;

const SharedInputCss = css`
  box-sizing: border-box;
  display: block;
  width: 100%;
  resize: none;
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
  font-size: 19px;
  border: 1px solid ${props => props.theme.COLOR.GRAY};

  &:focus {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 7px 8px;
  height: 80px;
  ${SharedInputCss}
`;

const Input = styled.input`
  padding: 7px 8px;
  ${SharedInputCss}
`;

const FormGroup = styled.div`
  box-sizing: border-box;
  width: ${props => props.width || "100%"};
  margin-bottom: 30px;
  position: relative;
`;

InputBox.defaultProps = {
  fieldType: "input",
  handleInputChange: () => {}
};

export default InputBox;
