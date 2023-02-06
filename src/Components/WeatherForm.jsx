import React, { useContext, useState } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { BiSearch } from "react-icons/bi";
import WeatherContext from "../Context/WeatherContext";

/* styled-components */
const FormWeatherContainer = styled.article`
  position: absolute;
  top: 1rem;
  right: 2rem;
  @media screen and (min-width: 994px) {
    position: static;
  }
`;
const FormWeather = styled.form`
  display: flex;
  column-gap: 1rem;
`;
const LocationInput = styled.input`
  width: 54.16vw;
  border: 0;
  border-bottom: thin solid var(--text-color);
  background: transparent;
  color: var(--text-color);

  ::placeholder {
    color: var(--text-alpha-color);
    font-family: var(--main-font);
  }
  :focus-visible {
    outline: 0;
  }
`;
const BtnSubmit = styled.button`
  background: transparent;
  color: var(--text-color);
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

/* Js for form */
const initialForm = {
  city: "",
};

const WeatherForm = () => {
  const { handleSearch, handleLocations } = useContext(WeatherContext);
  const [form, setForm] = useState(initialForm);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.city) alert("Write a city");
    handleSearch(form);
    handleLocations(form);
    setForm(initialForm);
  };
  return (
    <FormWeatherContainer>
      <FormWeather onSubmit={handleSubmit}>
        <LocationInput
          type="text"
          name="city"
          placeholder="Another Location"
          onChange={handleChange}
          value={form.city}
          autoComplete="off"
        />
        <BtnSubmit type="submit">
          <IconContext.Provider value={{ size: "24px" }}>
            <BiSearch />
          </IconContext.Provider>
        </BtnSubmit>
      </FormWeather>
    </FormWeatherContainer>
  );
};

export default WeatherForm;
