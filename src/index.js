import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import App from "./App";

import theme from "./constants/theme";
import * as serviceWorker from "./serviceWorker";

const MuiTheme = createMuiTheme(theme);

ReactDOM.render(
  <MuiThemeProvider theme={MuiTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
