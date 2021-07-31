import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Characters from "./components/Characters";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/characters/:id">
        <Characters />
      </Route>
    </Switch>
  );
}

export default App;
