import React from "react";
import Nav from "./Nav"
import Article from "./Article";
import Saved from "./Saved";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Article}/>
          <Route exact path="/saved" component={Saved}/>
        </Switch>
      </div>
    </Router>
);

export default App;
