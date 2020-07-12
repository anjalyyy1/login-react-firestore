import styled from "styled-components";

export const InputWrapper = styled.div``;

// export const PageWrapper = styled.div`
//   width: 50%;
//   margin: 0 auto;
//   text-align: center;

//   .image-upload {
//     position: relative;
//     right: 114px;
//     top: -12px;
//   }
// `;

export const PageWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;

  .image-upload {
    position: relative;
    right: 114px;
    top: -12px;
  }
`;

export const FormWrapper = styled.div``;

export const Heading = styled.div`
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
  padding: 70px 70px;
`;

export const LogoutButtonWrapper = styled.div`
  button {
    position: relative;
    color: ${props => props.theme.COLOR.PRIMARY_COLOR};
    background-color: ${props => props.theme.COLOR.WHITE};
    right: -300px;
    top: 20px;
    width: 20%;
    border-radius: 20px;
    font-size: 14px;
  }
`;
