import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Welcome(props) {
  useEffect(() => {
    getClientIp();
  }, []);

  const getClientIp = async () => {
    try {
      const clientDetails = await axios.get(
        `https://api.weatherapi.com/v1/ip.json?key=5ee7c5f332fe4c14b59231129212210&q=auto:ip`
      );
      console.log(clientDetails);
      props.setCityName(clientDetails.data.city);
      props.setClientDetails(clientDetails);
    } catch (err) {
      console.log("error: ", err);
      alert("get client location and details - NOT GOOD");
    }
  };

  return (
    <div className="welcomeComp bgweather">
      <h1 style={{ color: "white" }}>World Wide Weather</h1>
      <h5 style={{ color: "white" }}>By Dotan</h5>

      <Link to="/home" className="enterLink">
        ENTER
      </Link>
    </div>
  );
}

export default Welcome;
