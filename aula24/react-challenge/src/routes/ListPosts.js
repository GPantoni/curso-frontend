import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { getPostsList, deletePost } from "../services/posts";

import "../styles/style.css";

const ListPosts = () => {
  const [post, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  const handleDelete = async (open) => {
    try {
      await deletePost(open);
      toast.success("Post deletado com sucesso!!");
    } catch {
      toast.error("Ooops!! Houve um problema ao deletar o post.");
    } finally {
      setOpen(false);
    }
  };

  const handleOpenModalDelete = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleDenyDelete = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleGetPosts = async () => {
      const response = await getPostsList();
      setPosts(response.data);
      toast.success("Listagem de posts foi carregada com sucesso!!");
    };

    handleGetPosts();
  }, []);

  return (
    <>
      <div className="card">
        {post.map((item) => (
          <div className="card-item" key={item.id}>
            <div>
              <p className="title">{item.title}</p>
              <p className="text">{item.body}</p>
            </div>
            <div>
              <button className="info">Editar Post</button>
              <button
                className="error"
                onClick={() => {
                  return handleOpenModalDelete(item);
                }}
              >
                Excluir Post
              </button>
            </div>
          </div>
        ))}
      </div>
      {open && (
        <div className="modal">
          <p>Realmente deseja excluir essa postagem?</p>
          <div>
            <p>{selectedItem.title}</p>
            <p>{selectedItem.body}</p>
          </div>
          <div className="m-top-25">
            <button
              className="error"
              onClick={() => handleDelete(selectedItem)}
            >
              Excluir
            </button>
            <button className="cancel" onClick={handleDenyDelete}>
              cancelar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ListPosts;
