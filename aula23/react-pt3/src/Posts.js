import { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const { data: posts } = await axios.get(
      "http://jsonplaceholder.typicode.com/posts"
    );
    setPosts(posts);
    console.log("Usou getPosts");
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={getPosts}>Atualizar</button>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
