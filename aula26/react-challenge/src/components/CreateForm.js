import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  ActionButton,
  CancelButton,
  ButtonsLayout,
  TextInput,
  InputTitle,
} from "../styles/default";

const CreateForm = ({ func: onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      <InputTitle>Título</InputTitle>
      <TextInput
        inputProps={{ ref: register, name: "title" }}
        variant="outlined"
        size="small"
      ></TextInput>
      <InputTitle>Descrição</InputTitle>
      <TextInput
        inputProps={{ ref: register, name: "body" }}
        variant="outlined"
        size="small"
      ></TextInput>
      <ButtonsLayout>
        <ActionButton type="submit" variant="contained" color="primary">
          Criar
        </ActionButton>
        <Link to="/">
          <CancelButton variant="contained">Cancelar</CancelButton>
        </Link>
      </ButtonsLayout>
    </form>
  );
};

export default CreateForm;
