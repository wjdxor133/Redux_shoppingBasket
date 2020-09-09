import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Basket from "./pages/Basket/Basket";

import { Provider } from "react-redux";
import store from "./store/store";

const Routes = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/basket" component={Basket}></Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default Routes;
