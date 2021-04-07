import axios from "axios";

const api = "https://jsonplaceholder.typicode.com";

export const getPostsList = () => axios.get(api + "/posts");

export const createPost = (data) => axios.post(api + "/posts", data);

export const getPost = (id) => axios.get(api + "/posts/" + id);

export const putPost = (data, id) => {
  return axios.put(api + "/posts/" + id, data);
};

export const deletePost = (data) =>
  axios.delete(api + "/posts/" + data.id, data);
