import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import Sidebar from "../components/Sidebar";

import { getPostsList, deletePost, putPost } from "../services/posts";

import {
  PostCard,
  DeleteModal,
  EditModal,
  ActionButton,
  CancelButton,
  ButtonsLayout,
  TextInput,
  InputTitle,
} from "../styles/default";

const ListPosts = () => {
  const [post, setPosts] = useState([]);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const { register, handleSubmit } = useForm();

  const handleDelete = async (open) => {
    try {
      await deletePost(open);
      toast.success("Post deletado com sucesso!!");
    } catch {
      toast.error("Ooops!! Houve um problema ao deletar o post.");
    } finally {
      setOpenDelete(false);
    }
  };

  const handleOpenModalDelete = (item) => {
    setSelectedItem(item);
    setOpenDelete(true);
  };

  const handleCloseModalDelete = () => {
    setOpenDelete(false);
  };

  const handleOpenModalEdit = (item) => {
    setSelectedItem(item);
    setOpenEdit(true);
  };

  const handleCloseModalEdit = () => {
    setOpenEdit(false);
  };

  const onSubmit = async (data) => {
    try {
      if (data.title === "" || data.body === "")
        return toast.error("Todos os campos devem estar preenchidos.");
      await putPost(data, selectedItem.id);
      handleCloseModalEdit();
      toast.success("Post editado com sucesso!!");
    } catch {
      toast.error("Oops!! Houve um problema com a edição do post");
    }
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
    <div>
      <Sidebar />
      <div>
        {post.map((item) => (
          <PostCard key={item.id}>
            <div>
              <PostTitle>{item.title}</PostTitle>
              <PostBody className="text">{item.body}</PostBody>
            </div>
            <div>
              <button
                className="info"
                onClick={() => {
                  return handleOpenModalEdit(item);
                }}
              >
                Editar Post
              </button>
              <button
                className="error"
                onClick={() => {
                  return handleOpenModalDelete(item);
                }}
              >
                Excluir Post
              </button>
            </div>
          </PostCard>
        ))}
      </div>
      {openDelete && (
        <DeleteModal>
          <p>Realmente deseja excluir essa postagem?</p>
          <div>
            <p>
              <strong>{selectedItem.title}</strong>
            </p>
            <p>{selectedItem.body}</p>
          </div>
          <div className="m-top-25">
            <button
              className="error"
              onClick={() => handleDelete(selectedItem)}
            >
              Excluir
            </button>
            <button className="cancel" onClick={handleCloseModalDelete}>
              cancelar
            </button>
          </div>
        </DeleteModal>
      )}
      {openEdit && (
        <EditModal>
          <EditTitle>Edição de Post</EditTitle>
          <form className="container" onSubmit={handleSubmit(onSubmit)}>
            <InputTitle>Título</InputTitle>
            <TextInput
              inputProps={{
                ref: register,
                name: "title",
                defaultValue: selectedItem.title,
              }}
              variant="outlined"
              size="small"
            ></TextInput>
            <InputTitle>Descrição</InputTitle>
            <TextInput
              inputProps={{
                ref: register,
                name: "body",
                defaultValue: selectedItem.body,
              }}
              variant="outlined"
              size="small"
            ></TextInput>
            <ButtonsLayout>
              <ActionButton type="submit" variant="contained" color="primary">
                Salvar
              </ActionButton>
              <CancelButton
                variant="contained"
                onClick={() => {
                  return handleCloseModalEdit();
                }}
              >
                Cancelar
              </CancelButton>
            </ButtonsLayout>
          </form>
        </EditModal>
      )}
    </div>
  );
};

//------------ESTILIZAÇÃO-------------//

const PostTitle = styled.h3`
  color: rgba(33, 33, 33, 1);
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 5px;
`;

const PostBody = styled.p`
  color: rgba(33, 33, 33, 1);
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
`;

const EditTitle = styled.h1`
  font-size: 28px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 32.81px;
`;

//-----------------------------------//

export default ListPosts;
