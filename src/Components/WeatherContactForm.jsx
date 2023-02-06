import React from "react";
import NotFoundMain from "./NotFoundMain";
import { useForm } from "../Hooks/useForm";
import Loader from "./Loader";
import Message from "./Message";
import MyForm, { MyInputs, MySubmitBtn, MyTextArea } from "./MyForm";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (!form.comments.trim()) {
    errors.comments = "El campo 'Comentarios' es requerido";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments =
      "El campo 'Comentarios' no debe exceder los 255 caracteres";
  }

  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "var(--text-color)",
  textShadow: "1px 1px rgb(220 53 69)",
};

const ReturnBtn = styled.a`
  position: absolute;
  left: 5vw;
  top: 3vh;
  width: 5vw;
  height: 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3vw;
  color: var(--text-color);
  border-radius: 50%;
  border: thin solid var(--text-color);

  :hover {
    color: rgb(255, 165, 0);
    border: thin solid rgb(255, 165, 0);
  }
`;

const WeatherContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);
  return (
    <NotFoundMain style={{ paddingTop: "2rem" }}>
      <ReturnBtn href="/#/">
        <BiArrowBack />
      </ReturnBtn>
      <h1 style={{ textAlign: "center", width: "70%", margin: "1rem auto" }}>
        Send us your comments
      </h1>
      <MyForm onSubmit={handleSubmit}>
        <MyInputs
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          autoComplete="off"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && <p style={styles}>{errors.name}</p>}
        <MyInputs
          type="email"
          autoComplete="off"
          name="email"
          placeholder="Escribe tu email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && <p style={styles}>{errors.email}</p>}
        <MyTextArea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tus comentarios"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
        ></MyTextArea>
        {errors.comments && <p style={styles}>{errors.comments}</p>}
        <MySubmitBtn type="submit">Enviar</MySubmitBtn>
      </MyForm>
      {loading && <Loader />}
      {response && (
        <Message msg="Los datos han sido enviados" bgColor="#198754" />
      )}
    </NotFoundMain>
  );
};

export default WeatherContactForm;
