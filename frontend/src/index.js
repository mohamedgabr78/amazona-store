import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

const history = createBrowserHistory({
  basename: "/",
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} style={{ width: "100%" }}>
      <App />
    </Router>
    ,
  </Provider>,
  document.getElementById("root")
);
