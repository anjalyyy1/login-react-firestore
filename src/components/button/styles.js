import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${props => props.width};
  height: 46px;
  border-radius: 3px;
  background-color: ${props => props.theme.COLOR.PRIMARY_COLOR};
  border: 1px solid transparent;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  outline: none;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  transition: 0.5s all ease;
  vertical-align: top;
  opacity: ${props => (props.disabled ? "0.4" : "1")};
`;
