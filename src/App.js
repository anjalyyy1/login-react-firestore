import React from "react";
import Routes from "./routes";
import GlobalStyle from "./globalStyles";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

// configure redux store
import { store, rrfProps } from "./store";

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Routes />
        <ToastContainerStyled />
        <GlobalStyle />
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

const ToastContainerStyled = styled(ToastContainer)`
  .Toastify__toast {
    display: block;
    position: relative;
    padding: 15px;
    min-height: 50px;
    border-radius: 3px;
  }

  .Toastify__close-button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 6px;
  }
`;

export default App;
