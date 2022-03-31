import React, { useState, useEffect } from "react";

function WeatherNow(props) {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [isDay, setIsDay] = useState(props.forecast.data.current.is_day);
  const [weatherIcon, setWeatherIcon] = useState(null);

  const [srcsCelsiusOrFahrenheit, setSrcsCelsiusOrFahrenheit] = useState({
    feelsLike: {
      titels: ["Feelslike (℃):", "Feelslike (℉):"],
    },
    windSpeed: {
      titels: ["Wind (kph):", "Wind (mph):"],
    },
    perceptions: {
      titels: ["Precip (mm):", "Precip (in):"],
    },
  });

  useEffect(() => {
    if (props.forecast) {
      const localTime = props.forecast.data.location.localtime.split(" ");
      const fixDate = localTime[0].split("-");
      let day = fixDate[2];
      let month = fixDate[1];
      let year = fixDate[0];
      let finalFixDate = `${day}.${month}.${year}`;
      setIsDay(props.forecast.data.current.is_day);
      setDate(finalFixDate);
      setTime(localTime[1]);
      props.determinWeatherIconFunction(
        props.forecast.data.current.condition.code,
        isDay,
        setWeatherIcon
      );
    }
  }, [props.forecast, isDay, props.cityName]);

  return (
    <div className="weatherNowComp">
      <div className="weatherNowDetailsTableDiv">
        <div className="">
          <div className="colLCurrentTable">
            {props.celsiusOrFahrenheit
              ? srcsCelsiusOrFahrenheit.feelsLike.titels[1]
              : srcsCelsiusOrFahrenheit.feelsLike.titels[0]}
          </div>
          <div className="colLCurrentTable">
            {props.celsiusOrFahrenheit
              ? srcsCelsiusOrFahrenheit.windSpeed.titels[1]
              : srcsCelsiusOrFahrenheit.windSpeed.titels[0]}
          </div>
          <div className="colLCurrentTable">Humidity:</div>
          <div className="colLCurrentTable">Cloud:</div>
          <div className="colLCurrentTable">
            {props.celsiusOrFahrenheit
              ? srcsCelsiusOrFahrenheit.perceptions.titels[1]
              : srcsCelsiusOrFahrenheit.perceptions.titels[0]}
          </div>
        </div>

        <div className="">
          <div className="colRCurrentTable">
            {props.celsiusOrFahrenheit
              ? `${props.forecast.data.current.temp_f}°`
              : `${props.forecast.data.current.feelslike_c}°`}
          </div>
          <div className="colRCurrentTable">
            {props.celsiusOrFahrenheit
              ? props.forecast.data.current.wind_mph
              : props.forecast.data.current.wind_kph}
          </div>
          <div className="colRCurrentTable">
            {props.forecast.data.current.humidity + "%"}
          </div>
          <div className="colRCurrentTable">
            {props.forecast.data.current.cloud + "%"}
          </div>
          <div className="colRCurrentTable">
            {props.celsiusOrFahrenheit
              ? props.forecast.data.current.precip_in
              : props.forecast.data.current.precip_mm}
          </div>
        </div>
      </div>

      <div className="regionNcountryNlocalTimeDiv">
        <div className="cityNameDiv">{`${props.forecast.data.location.name}`}</div>
        <div className="regionNcountry">{`${props.forecast.data.location.region}, ${props.forecast.data.location.country}`}</div>
        <div className="localTime">{date}</div>
        <div className="localTime">{time}</div>
      </div>

      <div className="tempAndConditionDiv">
        <img className="tempAndConditionIcon" src={weatherIcon}></img>
        <div className="tempAndConditionDeg">
          {props.celsiusOrFahrenheit
            ? `${props.forecast.data.current.temp_f}℉`
            : `${props.forecast.data.current.temp_c}℃`}
        </div>
        <div className="tempAndConditionText">
          {props.forecast.data.current.condition.text}
        </div>
      </div>
    </div>
  );
}

export default WeatherNow;
