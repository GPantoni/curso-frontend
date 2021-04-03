import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../images/logo.svg";
import "../styles/Home.css";

const Home = () => {
  const history = useHistory();

  const handleNavigationSobre = () => {
    history.push("/sobre");
  };

  const handleNavigationPost = () => {
    history.push("/posts");
  };

  const handleNavigationComments = () => {
    history.push("/comments");
  };

  const handleNavigationCreatePost = () => {
    history.push("/create-post");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleNavigationSobre}>Sobre</button>
        <button onClick={handleNavigationPost}>Posts</button>
        <button onClick={handleNavigationCreatePost}>Create Post</button>
        <button onClick={handleNavigationComments}>Comments</button>
      </header>
    </div>
  );
};

export default Home;
