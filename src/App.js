import "./App.css";
import React, { Component } from "react";

import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import proximaNovaTheme from "./components/themes/ProximaNova";
import Main from "./components/Main";

import "./localization";
import {StyleRoot} from "radium";

class App extends Component {
  render() {
    return (
      <div className="App">
          <StyleRoot>
              <ThemeProvider theme={proximaNovaTheme}>
                  <CssBaseline/>
                  <Main/>
              </ThemeProvider>
          </StyleRoot>
      </div>
    );
  }
}

export default App;
