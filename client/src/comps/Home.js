import React, { useState, useEffect } from "react";
import axios from "axios";
import ForcastDay from "../comps/ForcastDay.js";
import HourDaily from "../comps/HourDaily.js";
import WeatherNow from "../comps/WeatherNow.js";

function Home(props) {
  console.log(props);

  const [lastUpdate, setLastUpdate] = useState(null);
  let countHours = 0;

  useEffect(() => {
    props.setDisplayNavbar("flex");

    if (props.forecast) {
      const whenLastUpdate =
        props.forecast.data.current.last_updated.split(" ");
      setLastUpdate(whenLastUpdate[1]);
    } else {
      getClientIp();
    }
  }, [props.forecast]);

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
      alert("get client location and details from home - NOT GOOD");
    }
  };

  const determinWeatherIconFunction = (src, isDay, setWeatherIcon) => {
    props.iconsArr.map((e, i) => {
      if (e.code === src) {
        setWeatherIcon(e.icon[isDay]);
      }
    });
  };

  return (
    <div className="homeBoard">
      {props.forecast ? (
        <>
          <div className="weatherNowLine">
            <WeatherNow
              forecast={props.forecast}
              cityName={props.cityName}
              iconsArr={props.iconsArr}
              determinWeatherIconFunction={determinWeatherIconFunction}
              celsiusOrFahrenheit={props.celsiusOrFahrenheit}
            />
          </div>

          <div className="hourDailyLine">
            <h5 style={{ margin: "0.4%" }}>
              Today by the hour (next 24 hours):
            </h5>

            <div className="hourDailyDivsLine scrollbar-hidden">
              {props.forecast
                ? props.forecast.data.forecast.forecastday[0].hour.map(
                    (e, i) => {
                      const fixTime = e.time.split(" ");
                      let newFixTime = fixTime[1];
                      let newFixTimeHours = newFixTime.split(":");
                      let finalFixTimeHours = newFixTimeHours[0];

                      const localTime =
                        props.forecast.data.location.localtime.split(" ");
                      let newLocalTime = localTime[1];
                      let newLocalTimeHours = newLocalTime.split(":");
                      let finalLocalTimeHours = newLocalTimeHours[0];

                      if (
                        Number(finalFixTimeHours) > Number(finalLocalTimeHours)
                      ) {
                        countHours++;
                        return (
                          <>
                            <HourDaily
                              forecast={e}
                              cityName={props.cityName}
                              iconsArr={props.iconsArr}
                              determinWeatherIconFunction={
                                determinWeatherIconFunction
                              }
                              todayOrTomorrow={"Today"}
                              celsiusOrFahrenheit={props.celsiusOrFahrenheit}
                            />
                          </>
                        );
                      }
                    }
                  )
                : null}

              {countHours < 24
                ? props.forecast.data.forecast.forecastday[1].hour.map(
                    (e, i) => {
                      if (i < 24 - countHours) {
                        return (
                          <>
                            <HourDaily
                              forecast={e}
                              cityName={props.cityName}
                              iconsArr={props.iconsArr}
                              determinWeatherIconFunction={
                                determinWeatherIconFunction
                              }
                              todayOrTomorrow={"Tomorrow"}
                              celsiusOrFahrenheit={props.celsiusOrFahrenheit}
                            />
                          </>
                        );
                      }
                    }
                  )
                : null}
            </div>
          </div>

          <div className="forecastLine">
            <h5 style={{ margin: "0.4%" }}>Forcast next 3 days:</h5>

            <div className="forcastDayDivsLine">
              {props.forecast
                ? props.forecast.data.forecast.forecastday.map((e, i) => {
                    return (
                      <>
                        <ForcastDay
                          forecast={e}
                          cityName={props.cityName}
                          iconsArr={props.iconsArr}
                          determinWeatherIconFunction={
                            determinWeatherIconFunction
                          }
                          whichDay={i}
                          celsiusOrFahrenheit={props.celsiusOrFahrenheit}
                        />
                      </>
                    );
                  })
                : null}
            </div>
          </div>

          <div className="lastUpdateLine">
            <div className="colRightLastUpdate">{`Last update: ${lastUpdate}`}</div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Home;
