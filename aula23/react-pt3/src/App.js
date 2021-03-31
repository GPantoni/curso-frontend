import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Sobre from "./Sobre";
import Posts from "./Posts";
import Comments from "./Comments";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
