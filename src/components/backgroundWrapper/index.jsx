import React from "react";
import styled from "styled-components";

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

const ColoredWrapper = styled.div`
  display: flex;

  &:after {
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;

const WidthWrapper = styled.div`
  width: 100%;
  margin: ${props => (props.hideTopMargin ? "0 auto 0" : " 106px auto 0")};
  max-width: ${props => props.theme.WRAPPER.MAX_WIDTH};
`;
