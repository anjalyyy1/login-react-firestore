import styled from "styled-components";

export const LoginImage = styled.img`
  background: ${props => props.theme.COLOR.WHITE};
  border-radius: 50%;
  display: inline-block;
`;

export const LoginImageWrapper = styled.div`
  background-color: ${props => props.theme.COLOR.PRIMARY_COLOR};
  padding: 20px;
  min-height: 253px;
`;

export const InputWrapper = styled.div``;

export const SignupLink = styled.div`
  display: inline-block;
  margin-top: 10px;
  color: ${props => props.theme.COLOR.GRAY};
  a {
    color: ${props => props.theme.COLOR.DARK_GREY};
  }
`;

export const PageWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;
  ${props => props.theme.SNIPPETS.BOX_SHADOW};
  background-color: ${props => props.theme.COLOR.WHITE};
  font-family: "Roboto", sans-serif;
  max-width: 550px;
`;

export const FormWrapper = styled.div`
  padding: 50px;
`;

export const Heading = styled.h2`
  color: ${props => props.theme.COLOR.WHITE};
  padding: 30px 0;
  background-color: ${props => props.theme.COLOR.PRIMARY_COLOR};
  ${props => props.theme.SNIPPETS.HEADING};
`;
