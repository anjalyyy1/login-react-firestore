// libraries
import React from "react";

//styles
import { ColoredWrapper, WidthWrapper } from "./styles";

const BgWrapper = Main => ({ children, ...props }) => {
  let { hideTopMargin } = props;
  return (
    <ColoredWrapper>
      <WidthWrapper hideTopMargin={hideTopMargin}>
        <Main {...props} />
      </WidthWrapper>
    </ColoredWrapper>
  );
};

export default BgWrapper;
