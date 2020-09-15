import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes/Routes";
import GlobalStyle from "./styles/GlobalStyles";

ReactDOM.render(
  <>
    <GlobalStyle />
    <Routes />
  </>,
  document.getElementById("root")
);
