import React from "react";

//styles
import { Label, ErrorMessage, TextArea, Input, FormGroup } from "./styles";

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
  value,
  className
}) => {
  return (
    <FormGroup width={width} className={className}>
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

InputBox.defaultProps = {
  fieldType: "input",
  handleInputChange: () => {}
};

export default InputBox;
