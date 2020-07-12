import styled from "styled-components";

export const ColoredWrapper = styled.div`
  display: flex;

  &:after {
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: linear-gradient(
      0deg,
      rgba(34, 164, 195, 1) 3%,
      rgba(247, 247, 247, 1) 22%
    );
  }
`;

export const WidthWrapper = styled.div`
  width: 100%;
  margin: ${props =>
    props.hideTopMargin ? "0 auto 100px" : " 106px auto 100px"};
  max-width: ${props => props.theme.WRAPPER.MAX_WIDTH};
`;
