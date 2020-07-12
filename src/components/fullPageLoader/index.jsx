import React from "react";

// styles
import { LoaderWrapper, Overlay, Loader } from "./styles";

const FullPageLoader = () => {
  return (
    <LoaderWrapper>
      <Overlay />
      <Loader />
    </LoaderWrapper>
  );
};

export default FullPageLoader;
