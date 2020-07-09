import React from "react";
import styled from "styled-components";

const Button = props => {
  let { label, onClickHandler, width } = props;

  return (
    <StyledButton onClick={onClickHandler} width={width}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: ${props => props.width || "100%"};
  height: 46px;
  border-radius: 3px;
  background-color: ${props => props.theme.COLOR.PRIMARY_COLOR};
  border: 1px solid transparent;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  transition: 0.5s all ease;
  vertical-align: top;
`;

export default Button;
