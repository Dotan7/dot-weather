import React, { useState, useEffect } from "react";

function HourDaily(props) {
  const [hour, setHour] = useState(props.forecast.time);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [isDay, setIsDay] = useState(props.forecast.is_day);

  useEffect(() => {
    if (props.forecast) {
      const fixTime = props.forecast.time.split(" ");
      let newFixTime = fixTime[1];
      setHour(newFixTime);
      props.determinWeatherIconFunction(
        props.forecast.condition.code,
        isDay,
        setWeatherIcon
      );
    }
  }, [props.forecast]);

  return (
    <div className="forcastDailyHourDivComp">
      <div className="hourNdayHourlyDiv">
        {hour}
        <br />
        {props.todayOrTomorrow}
      </div>

      <div className="iconHourlyDiv">
        <img src={weatherIcon}></img>
      </div>

      <div className="degreeNtextHourDailyDiv">
        <div className="degreeNtextHourDailyTextDeg">
          {props.celsiusOrFahrenheit
            ? `${props.forecast.temp_f}℉`
            : `${props.forecast.temp_c}℃`}
        </div>
        <div className="degreeNtextHourDailyTextText">
          {props.forecast.condition.text}
        </div>
      </div>

      <div className="forcastDailyHourDetailsTableDiv">
        <div style={{ margin: "0%", padding: "0%" }}>
          <div className="forcastDetailsTableColL">Feelslike:</div>
          <div className="forcastDetailsTableColL">Humidity:</div>
          <div className="forcastDetailsTableColL">Rain:</div>
        </div>

        <div style={{ margin: "0%", padding: "0%" }}>
          <div className="forcastDetailsTableColR">
            {props.celsiusOrFahrenheit
              ? `${props.forecast.feelslike_f}℉`
              : `${props.forecast.feelslike_c}℃`}
          </div>
          <div className="forcastDetailsTableColR">{`${props.forecast.humidity}%`}</div>
          <div className="forcastDetailsTableColR">{`${props.forecast.chance_of_rain}%`}</div>
        </div>
      </div>
    </div>
  );
}

export default HourDaily;
