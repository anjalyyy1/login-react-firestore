import styled, { css } from "styled-components";

export const SharedLabelCss = css`
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

export const Label = styled.label`
  ${SharedLabelCss}
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  position: absolute;
  margin-top: 5px;
  left: 0;
  color: ${props => props.theme.COLOR.ERROR};
`;

export const SharedInputCss = css`
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

export const TextArea = styled.textarea`
  padding: 7px 8px;
  height: 80px;
  ${SharedInputCss}
`;

export const Input = styled.input`
  padding: 7px 8px;
  ${SharedInputCss}
`;

export const FormGroup = styled.div`
  box-sizing: border-box;
  width: ${props => props.width || "100%"};
  margin-bottom: 30px;
  position: relative;
`;
