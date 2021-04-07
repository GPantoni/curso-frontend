import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";

export const Container = styled.div`
  background: #ffffff;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const TextInput = styled(TextField)`
  width: 335px;
  height: 40px;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 4px;
`;

export const ActionButton = styled(Button)`
  background-color: #267acd;
  border-radius: 4px;
  width: 95px;
  height: 36px;
`;

export const CancelButton = styled(Button)`
  background: #e0e0e0;
  border-radius: 4px;
  width: 95px;
  height: 36px;
`;

export const InputTitle = styled.h3`
  height: 30px;
  color: rgba(33, 33, 33, 1);
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  margin-top: 32px;
`;

export const ButtonsLayout = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 26px;
  margin-inline: 32px;
`;

export const PostCard = styled.div`
  margin: 15px;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 4px;
`;

export const DeleteModal = styled.div`
  position: fixed;
  top: 25%;
  left: 25%;
  max-width: 480px;
  width: 100%;
  padding: 32px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid #212121;
  animation: fadein 0.5s forwards ease-in-out;
`;

export const EditModal = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  padding: 32px;
  border-radius: 8px;
  background-color: white;
  animation: fadein 0.5s forwards ease-in-out;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
