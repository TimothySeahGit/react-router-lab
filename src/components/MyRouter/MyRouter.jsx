import React from "react";
import NavLinks from "../NavLinks/NavLinks";
import HomePage from "../HomePage/HomePage";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import TwitterFeed from "../TwitterFeed/TwitterFeed";
import TacosFeed from "../TacosFeed/TacosFeed";

function MyRouter() {
  return (
    <BrowserRouter>
      <div>
        <NavLinks />
        <h1>React Router Lab</h1>
        <Switch>
          <Route path="/twitter" render={props => <TwitterFeed {...props} />} />
          <Route
            path="/tacos/:id/:user"
            render={props => <TacosFeed {...props} />}
          />
          <Route path="/tacos" component={TacosFeed} />
          <Route path="/" exact component={HomePage} />
          <Redirect to="/tacos" component={TacosFeed} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default MyRouter;
