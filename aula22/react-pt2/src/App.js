import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./routes/Home";
import Sobre from "./routes/Sobre";
import Posts from "./routes/Posts";
import CreatePost from "./routes/CreatePost";
import Comments from "./routes/Comments";

import "react-toastify/dist/ReactToastify.css";

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
        <Route path="/create-post">
          <CreatePost />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <ToastContainer />
    </Router>
  );
}

export default App;
