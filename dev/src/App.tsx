import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProductPage from "./components/pages/ProductPage.tsx";
import HomePage from "./components/pages/HomePage.tsx";
import ErrorPage from "./components/pages/ErrorPage.tsx";
import Unko from "./components/pages/unti.tsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/products" component={ProductPage} exact />
        <Route path="/" component={HomePage} exact />
        <Route path="/unti"component={Unko} exact/>
        <Route path="/*" component={ErrorPage} exact />
      </Switch>
    </Router>
  );
}

export default App;