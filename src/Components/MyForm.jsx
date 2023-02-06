import styled from "styled-components";

const MyForm = styled.form`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const MyInputs = styled.input`
  padding: 1rem;
  background-color: transparent;
  border: thin solid white;
  border-radius: 5px;
  color: var(--text-color);
  ::placeholder {
    color: var(--text-color);
  }
`;

export const MyTextArea = styled.textarea`
  background-color: transparent;
  border: thin solid var(--text-color);
  border-radius: 5px;
  height: 200px;
  padding: 1rem;
  color: var(--text-color);

  ::placeholder {
    color: var(--text-color);
    font-family: var(--main-font);
  }
`;
export const MySubmitBtn = styled.button`
  padding: 1rem;
  width: 50%;
  align-self: center;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  border: thin solid var(--bg-color);
  background-color: var(--text-color);
  font-weight: 700;
  font-family: var(--main-font);
  cursor: pointer;
`;
export default MyForm;
