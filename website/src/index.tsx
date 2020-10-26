import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <CssBaseline />
            <App />
          </ThemeProvider>
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
