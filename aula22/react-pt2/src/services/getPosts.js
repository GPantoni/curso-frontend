import axios from "axios";

export const getPosts = () =>
  axios.get("http://jsonplaceholder.typicode.com/posts");
