import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Basket from "./pages/basket/Basket";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/basket" component={Basket}></Route>
      </Switch>
    </Router>
  );
};

export default Routes;
