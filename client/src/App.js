import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Welcome from "./comps/Welcome.js";
import Home from "./comps/Home.js";
import Navbar from "./comps/Navbar.js";

import { icons } from "./icons";
import bgNight from "./assets/bgNight.jpg";
import bgDay from "./assets/bgDay.jpg";

function App() {
  const [iconsArr, setIconsArr] = useState([
    {
      code: 1000,
      day: "Sunny",
      night: "Clear",
      icon: [icons.n113, icons.d113],
    },
    {
      code: 1003,
      day: "Partly cloudy",
      night: "Partly cloudy",
      icon: [icons.n116, icons.d116],
    },
    {
      code: 1006,
      day: "Cloudy",
      night: "Cloudy",
      icon: [icons.n119, icons.d119],
    },
    {
      code: 1009,
      day: "Overcast",
      night: "Overcast",
      icon: [icons.n122, icons.d122],
    },
    {
      code: 1030,
      day: "Mist",
      night: "Mist",
      icon: [icons.n143, icons.d143],
    },
    {
      code: 1063,
      day: "Patchy rain possible",
      night: "Patchy rain possible",
      icon: [icons.n176, icons.d176],
    },
    {
      code: 1066,
      day: "Patchy snow possible",
      night: "Patchy snow possible",
      icon: [icons.n179, icons.d179],
    },
    {
      code: 1069,
      day: "Patchy sleet possible",
      night: "Patchy sleet possible",
      icon: [icons.n182, icons.d182],
    },
    {
      code: 1072,
      day: "Patchy freezing drizzle possible",
      night: "Patchy freezing drizzle possible",
      icon: [icons.n185, icons.d185],
    },
    {
      code: 1087,
      day: "Thundery outbreaks possible",
      night: "Thundery outbreaks possible",
      icon: [icons.n200, icons.d200],
    },
    {
      code: 1114,
      day: "Blowing snow",
      night: "Blowing snow",
      icon: [icons.n227, icons.d227],
    },
    {
      code: 1117,
      day: "Blizzard",
      night: "Blizzard",
      icon: [icons.n230, icons.d230],
    },
    {
      code: 1135,
      day: "Fog",
      night: "Fog",
      icon: [icons.n248, icons.d248],
    },
    {
      code: 1147,
      day: "Freezing fog",
      night: "Freezing fog",
      icon: [icons.n260, icons.d260],
    },
    {
      code: 1150,
      day: "Patchy light drizzle",
      night: "Patchy light drizzle",
      icon: [icons.n263, icons.d263],
    },
    {
      code: 1153,
      day: "Light drizzle",
      night: "Light drizzle",
      icon: [icons.n266, icons.d266],
    },
    {
      code: 1168,
      day: "Freezing drizzle",
      night: "Freezing drizzle",
      icon: [icons.n281, icons.d281],
    },
    {
      code: 1171,
      day: "Heavy freezing drizzle",
      night: "Heavy freezing drizzle",
      icon: [icons.n284, icons.d284],
    },
    {
      code: 1180,
      day: "Patchy light rain",
      night: "Patchy light rain",
      icon: [icons.n293, icons.d293],
    },
    {
      code: 1183,
      day: "Light rain",
      night: "Light rain",
      icon: [icons.n296, icons.d296],
    },
    {
      code: 1186,
      day: "Moderate rain at times",
      night: "Moderate rain at times",
      icon: [icons.n299, icons.d299],
    },
    {
      code: 1189,
      day: "Moderate rain",
      night: "Moderate rain",
      icon: [icons.n302, icons.d302],
    },
    {
      code: 1192,
      day: "Heavy rain at times",
      night: "Heavy rain at times",
      icon: [icons.n305, icons.d305],
    },
    {
      code: 1195,
      day: "Heavy rain",
      night: "Heavy rain",
      icon: [icons.n308, icons.d308],
    },
    {
      code: 1198,
      day: "Light freezing rain",
      night: "Light freezing rain",
      icon: [icons.n311, icons.d311],
    },
    {
      code: 1201,
      day: "Moderate or heavy freezing rain",
      night: "Moderate or heavy freezing rain",
      icon: [icons.n314, icons.d314],
    },
    {
      code: 1204,
      day: "Light sleet",
      night: "Light sleet",
      icon: [icons.n317, icons.d317],
    },
    {
      code: 1207,
      day: "Moderate or heavy sleet",
      night: "Moderate or heavy sleet",
      icon: [icons.n320, icons.d320],
    },
    {
      code: 1210,
      day: "Patchy light snow",
      night: "Patchy light snow",
      icon: [icons.n323, icons.d323],
    },
    {
      code: 1213,
      day: "Light snow",
      night: "Light snow",
      icon: [icons.n326, icons.d326],
    },
    {
      code: 1216,
      day: "Patchy moderate snow",
      night: "Patchy moderate snow",
      icon: [icons.n329, icons.d329],
    },
    {
      code: 1219,
      day: "Moderate snow",
      night: "Moderate snow",
      icon: [icons.n332, icons.d332],
    },
    {
      code: 1222,
      day: "Patchy heavy snow",
      night: "Patchy heavy snow",
      icon: [icons.n335, icons.d335],
    },
    {
      code: 1225,
      day: "Heavy snow",
      night: "Heavy snow",
      icon: [icons.n338, icons.d338],
    },
    {
      code: 1237,
      day: "Ice pellets",
      night: "Ice pellets",
      icon: [icons.n350, icons.d350],
    },
    {
      code: 1240,
      day: "Light rain shower",
      night: "Light rain shower",
      icon: [icons.n353, icons.d353],
    },
    {
      code: 1243,
      day: "Moderate or heavy rain shower",
      night: "Moderate or heavy rain shower",
      icon: [icons.n356, icons.d356],
    },
    {
      code: 1246,
      day: "Torrential rain shower",
      night: "Torrential rain shower",
      icon: [icons.n359, icons.d359],
    },
    {
      code: 1249,
      day: "Light sleet showers",
      night: "Light sleet showers",
      icon: [icons.n362, icons.d362],
    },
    {
      code: 1252,
      day: "Moderate or heavy sleet showers",
      night: "Moderate or heavy sleet showers",
      icon: [icons.n365, icons.d365],
    },
    {
      code: 1255,
      day: "Light snow showers",
      night: "Light snow showers",
      icon: [icons.n368, icons.d368],
    },
    {
      code: 1258,
      day: "Moderate or heavy snow showers",
      night: "Moderate or heavy snow showers",
      icon: [icons.n371, icons.d371],
    },
    {
      code: 1261,
      day: "Light showers of ice pellets",
      night: "Light showers of ice pellets",
      icon: [icons.n374, icons.d374],
    },
    {
      code: 1264,
      day: "Moderate or heavy showers of ice pellets",
      night: "Moderate or heavy showers of ice pellets",
      icon: [icons.n377, icons.d377],
    },
    {
      code: 1273,
      day: "Patchy light rain with thunder",
      night: "Patchy light rain with thunder",
      icon: [icons.n386, icons.d386],
    },
    {
      code: 1276,
      day: "Moderate or heavy rain with thunder",
      night: "Moderate or heavy rain with thunder",
      icon: [icons.n389, icons.d389],
    },
    {
      code: 1279,
      day: "Patchy light snow with thunder",
      night: "Patchy light snow with thunder",
      icon: [icons.n392, icons.d392],
    },
    {
      code: 1282,
      day: "Moderate or heavy snow with thunder",
      night: "Moderate or heavy snow with thunder",
      icon: [icons.n395, icons.d395],
    },
  ]);
  const [clientDetails, setClientDetails] = useState(null);
  const [cityName, setCityName] = useState("new york");
  const [forecast, setForecast] = useState(null);
  const [celsiusOrFahrenheit, setCelsiusOrFahrenheit] = useState(false);
  const [displayNavbar, setDisplayNavbar] = useState("none");

  const celsiusOrFahrenheitFunction = () => {
    setCelsiusOrFahrenheit(!celsiusOrFahrenheit);
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: forecast
          ? forecast.data.current.is_day === 1
            ? `url(${bgDay})`
            : `url(${bgNight})`
          : "green",
      }}
    >
      <Router>
        <Navbar
          cityName={cityName}
          setCityName={setCityName}
          forecast={forecast}
          setForecast={setForecast}
          clientDetails={clientDetails}
          celsiusOrFahrenheitFunction={celsiusOrFahrenheitFunction}
          displayNavbar={displayNavbar}
        />

        <Route
          exact
          path="/"
          render={() => (
            <Welcome
              setCityName={setCityName}
              setClientDetails={setClientDetails}
            />
          )}
        />

        <Switch>
          <Route
            path="/home"
            render={() => (
              <Home
                forecast={forecast}
                cityName={cityName}
                iconsArr={iconsArr}
                celsiusOrFahrenheit={celsiusOrFahrenheit}
                setDisplayNavbar={setDisplayNavbar}
                setCityName={setCityName}
                setClientDetails={setClientDetails}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
