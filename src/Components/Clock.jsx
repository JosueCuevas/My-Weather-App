import React, { useState, useEffect, useContext } from "react";
import WeatherContext from "../Context/WeatherContext";

export const Clock = () => {
  const { timeZone } = useContext(WeatherContext);
  const [date, setDate] = useState(new Date());
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanUp() {
      clearInterval(timerId);
    };
  }, []);

  const timeOptions = {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    timeZone: timeZone.timezone,
  };
  const todayOptions = {
    weekend: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: timeZone.timezone,
  };

  return (
    <section>
      <span className="date">
        {date.toLocaleTimeString("en-US", timeOptions)} -{" "}
        {date.toLocaleDateString("en-US", todayOptions)}
      </span>
    </section>
  );
};
