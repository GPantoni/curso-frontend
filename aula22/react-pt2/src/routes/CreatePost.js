import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import postPosts from "../services/postPosts";
const CreatePost = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await postPosts(data);
      toast.success("Post enviado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado!");
    }
  };

  return (
    <div>
      <h1>Create Post</h1>
      <br />
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Usuário</h3>
        <input
          type="number"
          placeholder="Número de Usuário"
          name="userId"
          ref={register}
        />
        <h3>Título</h3>
        <input
          type="text"
          placeholder="Título do Post"
          name="title"
          ref={register}
        />
        <h3>Descrição</h3>
        <input
          type="text"
          placeholder="Texto do Post"
          name="body"
          ref={register}
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default CreatePost;
