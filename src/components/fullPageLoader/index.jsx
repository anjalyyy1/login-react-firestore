import React from "react";
import styled, { keyframes } from "styled-components";

const FullPageLoader = () => {
  return (
    <LoaderWrapper>
      <Overlay />
      <Loader />
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div``;

const spin = keyframes`
 0% { transform: rotate(0deg); }
 100% { transform: rotate(360deg); }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background-color: #f0efefba;
`;

const Loader = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 3;
  margin: -75px 0 0 -20px;
  border: 5px solid ${props => props.theme.COLOR.WHITE};
  border-radius: 50%;
  border-top: 5px solid ${props => props.theme.COLOR.PRIMARY_COLOR};
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;
`;

export default FullPageLoader;
