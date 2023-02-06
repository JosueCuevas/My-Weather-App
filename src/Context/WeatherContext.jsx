import { createContext, useEffect, useState } from "react";
import helpGeolocation from "../Helpers/helpGeolocation";
import { helpHTTP } from "../Helpers/helpHTTP";

const apiHeader = {
  headers: { "X-Api-Key": "VIcViOnR+ZTh7mW6ER38Mg==zCHeKEMjfaoKs2Fy" },
};

const recentLocations = [
  { city: "New York" },
  { city: "London" },
  { city: "Paris" },
  { city: "Tokyo" },
];

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [search, setSearch] = useState(null);
  const [timeZone, setTimeZone] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loc, setLoc] = useState(recentLocations);
  const handleLocations = (lastLocation) => {
    if (recentLocations.length === 4) recentLocations.splice(0, 1);
    recentLocations.push(lastLocation);
    setLoc(recentLocations);
  };
  const handleSearch = (data) => {
    setSearch(data);
  };
  useEffect(() => {
    const firstWeather = async () => {
      try {
        let { lat, lon } = await helpGeolocation();
        let weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4145f47fc99938a3de648be19b070aff`;
        let timeZoneURL = `https://api.api-ninjas.com/v1/timezone?lat=${lat}&lon=${lon}`;
        const [initialWeather, initialTimeZone] = await Promise.all([
          helpHTTP().get(weatherURL),
          helpHTTP().get(timeZoneURL, apiHeader),
        ]);
        setWeather(initialWeather);
        setTimeZone(initialTimeZone);
        setLoading(false);
      } catch (error) {
        console.warn(`ERROR ${error.code}:${error.message}`, error);
      }
    };
    firstWeather();
  }, []);

  useEffect(() => {
    if (search === null) return;
    const newLocation = async () => {
      try {
        setLoading(true);
        let city = search.city;
        let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4145f47fc99938a3de648be19b070aff`;
        let timeZoneURL = `https://api.api-ninjas.com/v1/timezone?city=${city}`;
        const [newWeather, newTimeZone] = await Promise.all([
          helpHTTP().get(weatherURL),
          helpHTTP().get(timeZoneURL, apiHeader),
        ]);
        setTimeZone(newTimeZone);
        setWeather(newWeather);
        setLoading(false);
      } catch (error) {
        console.warn(`ERROR ${error.code}:${error.message}`, error);
      }
    };
    newLocation();
  }, [search]);

  let data = {
    search,
    timeZone,
    weather,
    loading,
    loc,
    handleLocations,
    handleSearch,
  };
  return (
    <WeatherContext.Provider value={data}>{children}</WeatherContext.Provider>
  );
};
export { WeatherProvider };
export default WeatherContext;
