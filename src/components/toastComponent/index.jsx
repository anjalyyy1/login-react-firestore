import React from "react";
import Styled from "styled-components";

export const ToastComponent = props => {
  console.log(props.message);
  return (
    <ToastComponentWrapper>
      <ToastComponentHeading>
        {props.isSuccess ? "Success" : "Error"}
      </ToastComponentHeading>
      <ToastComponentMessage
        dangerouslySetInnerHTML={{ __html: props.message }}
      />
    </ToastComponentWrapper>
  );
};

const ToastComponentWrapper = Styled.div``;
const ToastComponentHeading = Styled.div`
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: bold;
`;

const ToastComponentMessage = Styled.div`
  line-height: 1.5;
  font-size: 12px;
  .message {
    font-weight: 900;
  }
`;
