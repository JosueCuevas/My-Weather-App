import React, { useContext } from "react";
import styled from "styled-components";
import WeatherContext from "../Context/WeatherContext";

const LocationsForm = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  row-gap: 1rem;
  padding-bottom: 4rem;
  border-bottom: thin solid;
`;

const LocationInput = styled.input`
  border: 0;
  background: 0;
  color: var(--text-color);
  text-align: start;
  font-family: var(--main-font);
  padding: 0;
  cursor: pointer;
`;

const LatestLocations = () => {
  const { loc, handleSearch } = useContext(WeatherContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch({
      city: e.target.city.value,
    });
  };
  return (
    <LocationsForm>
      {loc.map((el) => (
        <form onSubmit={handleSubmit} key={crypto.randomUUID()}>
          <input type="hidden" name="city" value={el.city} />
          <LocationInput type="submit" value={el.city} />
        </form>
      ))}
    </LocationsForm>
  );
};

export default LatestLocations;
