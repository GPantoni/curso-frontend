import axios from "axios";

const api = "https://jsonplaceholder.typicode.com";

export const getPostsList = () => axios.get(api + "/posts");

export const createPost = (data) => axios.post(api + "/posts", data);

export const getPost = (id) => axios.get(api + "/posts/" + id);

export const putPost = (data) => axios.put(api + "/posts/" + data.id, data);

export const deletePost = (open) =>
  axios.delete(api + "/posts/" + open.id, open);
