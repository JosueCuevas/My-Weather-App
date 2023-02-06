import React from "react";
import { BiMoon, BiWind } from "react-icons/bi";
import {
  BsCloudSun,
  BsSun,
  BsCloudMoon,
  BsCloudy,
  BsClouds,
  BsCloudDrizzle,
  BsCloudLightning,
} from "react-icons/bs";
import { WiDayRain, WiNightAltRain } from "react-icons/wi";
import { FaRegSnowflake } from "react-icons/fa";

const WeatherIcon = ({ icon }) => {
  switch (icon) {
    case "01d":
      return <BsSun />;
    case "01n":
      return <BiMoon />;
    case "02d":
      return <BsCloudSun />;
    case "02n":
      return <BsCloudMoon />;
    case "03d":
      return <BsCloudy />;
    case "03n":
      return <BsCloudy />;
    case "04d":
      return <BsClouds />;
    case "04n":
      return <BsClouds />;
    case "09d":
      return <BsCloudDrizzle />;
    case "09n":
      return <BsCloudDrizzle />;
    case "10d":
      return <WiDayRain />;
    case "10n":
      return <WiNightAltRain />;
    case "11d":
      return <BsCloudLightning />;
    case "11n":
      return <BsCloudLightning />;
    case "13d":
      return <FaRegSnowflake />;
    case "13dn":
      return <FaRegSnowflake />;
    case "50d":
      return <BiWind />;
    case "50n":
      return <BiWind />;
    default:
      return false;
  }
};

export default WeatherIcon;
