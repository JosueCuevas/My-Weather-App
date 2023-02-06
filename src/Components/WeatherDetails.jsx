import React, { useContext } from "react";
import styled from "styled-components";
import WeatherContext from "../Context/WeatherContext";

const DetailsTitle = styled.h3`
  text-align: center;
  font-weight: 700;
  font-size: var(--step-1);
  text-shadow: 1px 1px 5px var(--bg-color);
`;
const DetailsWeather = styled.section`
  display: flex;
  justify-content: space-between;
  text-shadow: 1px 1px 1px var(--bg-color);
  margin-bottom: 2rem;
`;
const WeatherDetails = () => {
  const { weather } = useContext(WeatherContext);
  let cloudy = weather.clouds.all + "%";
  let humidity = weather.main.humidity + "%";
  let wind = weather.wind.speed + "m/s";
  let visibility = weather.visibility + "m";
  let rain;
  weather.rain && (rain = weather.rain["1h"] + "mm");
  return (
    <article>
      <DetailsTitle className="detailsTitle"> Weather Details</DetailsTitle>
      <DetailsWeather>
        <span>Cloudy</span>
        <span>{cloudy}</span>
      </DetailsWeather>
      <DetailsWeather>
        <span>Humidity</span>
        <span>{humidity}</span>
      </DetailsWeather>
      <DetailsWeather>
        <span>Wind</span>
        <span>{wind}</span>
      </DetailsWeather>
      <DetailsWeather>
        <span>Visibility</span>
        <span>{visibility}</span>
      </DetailsWeather>
      {rain && (
        <DetailsWeather>
          <span>Rain</span>
          <span>{rain}</span>
        </DetailsWeather>
      )}
    </article>
  );
};

export default WeatherDetails;
