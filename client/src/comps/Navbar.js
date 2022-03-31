import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

function Navbar(props) {
  useEffect(() => {
    if (props.clientDetails) {
      getDataApi();
    }
  }, [props.clientDetails]);

  const getDataApi = async (e) => {
    if (e) {
      e.preventDefault();
    }

    try {
      const resForecastApi = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=5ee7c5f332fe4c14b59231129212210&q=${props.cityName}&days=3&aqi=no&alerts=yes`
      );
      console.log(resForecastApi);
      props.setForecast(resForecastApi);
    } catch (err) {
      console.log("error: ", err);
      alert("resForecastApi. not good");
    }
  };

  return (
    <div className="navbar" style={{ display: `${props.displayNavbar}` }}>
      <div className="csCharsDiv">
        <span className="csChars">℃</span>

        <label class="switch">
          <input type="checkbox"></input>
          <span
            onClick={() => {
              props.celsiusOrFahrenheitFunction();
            }}
            class="slider round"
          ></span>
        </label>

        <span className="csChars">℉</span>
      </div>

      <div className="navBarTextDiv">Weather around the world</div>

      <form className="searchForm">
        <input
          className="searchInput"
          type="text"
          onChange={(e) => props.setCityName(e.target.value)}
          placeholder="Enter city name"
        ></input>
        <button
          className="searchBtn"
          type="submit"
          onClick={(e) => {
            getDataApi(e);
          }}
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
}

export default Navbar;
