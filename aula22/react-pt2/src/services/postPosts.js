import axios from "axios";

const postPosts = (data) =>
  axios.post("http://jsonplaceholder.typicode.com/posts", data);

export default postPosts;
