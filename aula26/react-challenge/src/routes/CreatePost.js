import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

import CreateForm from "../components/CreateForm";

import { createPost } from "../services/posts";

import { Container } from "../styles/default";

const CreatePost = () => {
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      if (data.title === "" || data.body === "")
        return toast.error("Todos os campos devem estar preenchidos.");
      await createPost(data);
      toast.success("Post criado com sucesso!!");
      history.push("/");
    } catch {
      toast.error("Oops!! Houve um problema com a criação do post");
    }
  };

  return (
    <Container>
      <CreateTitle>Criar uma publicação</CreateTitle>
      <CreateForm func={onSubmit} />
    </Container>
  );
};

//------------Estilização--------------//

const CreateTitle = styled.h1`
  font-size: 28px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 32.81px;
`;

//------------------------------------//

export default CreatePost;
