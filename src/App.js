import React from "react";
import Routes from "./routes";
import GlobalStyle from "./globalStyles";

import { Provider } from "react-redux";

// configure redux store
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
