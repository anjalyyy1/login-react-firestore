import React from "react";
import Routes from "./routes";
import GlobalStyle from "./globalStyles";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

import { Provider } from "react-redux";

// configure redux store
import { store, rrfProps } from "./store";

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Routes />
        <GlobalStyle />
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
