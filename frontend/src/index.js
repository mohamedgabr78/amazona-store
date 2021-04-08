import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { createBrowserHistory } from "history";

import App from "./App";

const history = createBrowserHistory({
  basename: "/",
});

ReactDOM.render(
  <Router history={history} style={{ width: "100%" }}>
    <App />
  </Router>,
  document.getElementById("root")
);
