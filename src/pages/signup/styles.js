import styled from "styled-components";

export const LoginLink = styled.div`
  a {
    color: ${props => props.theme.COLOR.DARK_GREY};
    display: inline-block;
    width: 100%;
    margin-top: 30px;
    font-size: 20px;
  }
`;

export const InputWrapper = styled.span``;

export const PageWrapper = styled.div`
  width: 100%;
  margin: 0 auto 100px;
  font-family: "Roboto", sans-serif;

  .halfWidth {
    width: 49%;
    display: inline-block;
  }

  .marginLeft {
    margin-left: 10px;
  }
  .width-wrapper {
    margin-top: 10px;
  }
`;

export const FormWrapper = styled.div`
  padding: 7px 50px;
  width: 55%;
`;

export const Heading = styled.h2`
  ${props => props.theme.SNIPPETS.HEADING};
  color: ${props => props.theme.COLOR.WHITE};
  font-size: 40px;
  padding: 16px;
  margin-bottom: 35px;
  margin-bottom: 35px;
  position: absolute;
  width: 100%;
  left: 0;
  background-color: ${props => props.theme.COLOR.PRIMARY_COLOR};
  padding: 50px 70px;
`;

export const ImageWrapper = styled.div`
  width: 37%;
  margin-top: 100px;
`;

export const SignupImageWrapper = styled.div`
  min-height: 314px;
`;

export const SignupImage = styled.img``;

export const SignupWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 150px;
`;
