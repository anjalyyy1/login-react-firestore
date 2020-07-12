import React from "react";

//styles
import {
  ToastComponentWrapper,
  ToastComponentHeading,
  ToastComponentMessage
} from "./styles";

export const ToastComponent = props => {
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
