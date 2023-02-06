import React from "react";
import WeatherForm from "./WeatherForm";
import WeatherGeneral from "./WeatherGeneral";
import WeatherInfo from "./WeatherInfo";

const WeatherMain = () => {
  return (
    <>
      {window.innerWidth < 994 && <WeatherForm />}
      <WeatherGeneral />
      <WeatherInfo />
    </>
  );
};

export default WeatherMain;
