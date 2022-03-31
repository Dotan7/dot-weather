import React, { useState, useEffect } from "react";

function ForcastDay(props) {
  const [date, setDate] = useState(null);
  const [whichDay, setWhichDay] = useState();
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [daysNames, setDaysNames] = useState({
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  });

  useEffect(() => {
    let getNewDate = new Date();
    let getNumberDayInMonth = getNewDate.getDate();
    let getNumberDayInWeek = getNewDate.getDay();

    if (props.forecast) {
      const fixDate = props.forecast.date.split("-");
      let day = fixDate[2];
      let month = fixDate[1];
      let year = fixDate[0];
      let finalFixDate = `${day}.${month}.${year}`;
      setDate(finalFixDate);
      props.determinWeatherIconFunction(
        props.forecast.day.condition.code,
        1,
        setWeatherIcon
      );

      if (getNumberDayInMonth === Number(day)) {
        setWhichDay(`Today, ${daysNames[getNumberDayInWeek]}`);
      } else if (getNumberDayInMonth + 1 === Number(day)) {
        setWhichDay(`tomorrow, ${daysNames[getNumberDayInWeek + 1]}`);
      } else if (getNumberDayInMonth + 2 === Number(day)) {
        setWhichDay(daysNames[getNumberDayInWeek + 2]);
      } else if (getNumberDayInMonth - 1 === Number(day)) {
        setWhichDay(`Yesterday, ${daysNames[getNumberDayInWeek - 1]}`);
      }
    }
  }, [props.forecast]);

  return (
    <div className="forcastDayDivComp">
      <div className="dateNday">
        {date}
        <br />
        {whichDay}
      </div>

      <div className="forcastDayDivViewLine">
        <div className="forcastDayViewLeftInLine">
          <div className="degTextInDayly">
            {props.celsiusOrFahrenheit
              ? `${props.forecast.day.avgtemp_f}℉`
              : `${props.forecast.day.avgtemp_c}℃`}
          </div>
          <div className="conTextInDayly">
            {props.forecast.day.condition.text}
          </div>
          <div className="minmaxTextInDayly">
            {props.celsiusOrFahrenheit
              ? `min:${props.forecast.day.mintemp_f}℉`
              : `min:${props.forecast.day.mintemp_c}℃`}
          </div>
          <div className="minmaxTextInDayly">
            {props.celsiusOrFahrenheit
              ? `max:${props.forecast.day.maxtemp_f}℉`
              : `max:${props.forecast.day.maxtemp_c}℃`}
          </div>
        </div>

        <div className="forcastDayViewMiddleInLine">
          <img src={weatherIcon} class="iconDaily"></img>
        </div>

        <div className="forcastDetailsTableDivRightInLine">
          <div>
            <div className="forcastDetailsTableColL">Rain:</div>
            <div className="forcastDetailsTableColL">Humidity:</div>
            <div className="forcastDetailsTableColL">Sunrise:</div>
            <div className="forcastDetailsTableColL">Sunset:</div>
          </div>

          <div>
            <div className="forcastDetailsTableColR">
              {props.forecast.day.daily_chance_of_rain + "%"}
            </div>
            <div className="forcastDetailsTableColR">
              {props.forecast.day.avghumidity + "%"}
            </div>
            <div className="forcastDetailsTableColR">
              {props.forecast.astro.sunrise}
            </div>
            <div className="forcastDetailsTableColR">
              {props.forecast.astro.sunset}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForcastDay;
