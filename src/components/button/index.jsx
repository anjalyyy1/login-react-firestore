// libraries
import React from "react";

// styles
import { StyledButton } from "./styles";

const Button = props => {
  let { label, onClickHandler, width, disabled } = props;

  return (
    <StyledButton onClick={onClickHandler} width={width} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

Button.defaultProps = {
  onClickHandler: () => {},
  width: "100%",
  disabled: false
};

export default Button;
