import React from "react";
import WeatherDetails from "./WeatherDetails";
import WeatherForm from "./WeatherForm";
import styled from "styled-components";
import LatestLocations from "./LatestLocations";

const InfoWeather = styled.article`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(160, 159, 159, 0.2);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;

  @media screen and (min-width: 994px) {
    margin-top: 0;
    width: 30%;
  }
`;

const WeatherInfo = () => {
  return (
    <InfoWeather>
      {window.innerWidth > 994 && <WeatherForm />}
      {window.innerWidth > 994 && <LatestLocations />}
      <WeatherDetails />
    </InfoWeather>
  );
};

export default WeatherInfo;
