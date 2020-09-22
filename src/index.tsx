import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes/Routes";
import GlobalStyles from "./styles/GlobalStyles";
import Theme from "styles/theme";

ReactDOM.render(
  <>
    <GlobalStyles />
    <Theme>
      <Routes />
    </Theme>
  </>,
  document.getElementById("root")
);
