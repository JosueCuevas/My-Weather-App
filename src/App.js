import React, { useContext } from "react";
import Loader from "./Components/Loader";
import WeatherMain from "./Components/WeatherMain";
import Main from "./Components/MyMain";
import { NotFound } from "./Components/NotFound";
import { HashRouter, Route, Routes } from "react-router-dom";
import WeatherFooter from "./Components/WeatherFooter";
import WeatherContactForm from "./Components/WeatherContactForm";
import WeatherContext from "./Context/WeatherContext";

function App() {
  const { loading, weather, timeZone } = useContext(WeatherContext);
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {loading && <Loader />}
              {!loading &&
                (weather.cod !== 200 ? (
                  <NotFound />
                ) : (
                  <>
                    <Main
                      imageID={weather.weather[0].id}
                      hour={parseInt(
                        new Date()
                          .toLocaleString("en-US", {
                            timeZone: timeZone.timezone,
                            hour12: false,
                          })
                          .slice(10, 12),
                        10
                      )}
                    >
                      <WeatherMain />
                    </Main>
                    <WeatherFooter />
                  </>
                ))}
            </>
          }
        />
        <Route path="contact" element={<WeatherContactForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
