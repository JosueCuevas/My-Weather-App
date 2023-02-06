import React, { useContext } from "react";
import { Clock } from "./Clock";
import styled from "styled-components";
import WeatherIcon from "./WeatherIcon";
import { IconContext } from "react-icons";
import WeatherContext from "../Context/WeatherContext";
const General = styled.article`
  width: 70%;
  padding-bottom: 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 4rem;
  background: rgba(140, 165, 162, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 5px;

  @media screen and (min-width: 994px) {
    flex-direction: row;
    column-gap: 3rem;
    background: initial;
    backdrop-filter: unset;
    align-self: flex-end;
    width: 53.3%;
  }
`;
const Location = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Icon = styled.section`
  width: 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const City = styled.h2`
  text-align: center;
  @media screen and (min-width: 994px) {
    margin: 0;
  }
`;
const WeatherGeneral = () => {
  const { weather } = useContext(WeatherContext);
  let temp = Math.round(weather.main.temp - 273.15);
  let desc = weather.weather[0].description;
  return (
    <General>
      <h1>{temp}°C</h1>
      <Location>
        <div>
          <City>{weather.name}</City>
        </div>
        <Clock />
      </Location>
      <Icon>
        <IconContext.Provider value={{ size: "3rem" }}>
          <WeatherIcon icon={weather.weather[0].icon} />
        </IconContext.Provider>
        <span className="desc">{desc}</span>
      </Icon>
    </General>
  );
};

export default WeatherGeneral;
