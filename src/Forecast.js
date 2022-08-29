import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState();

  function handleResult(response) {
    console.log(response);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  if (loaded) {
    return (
      <div id="forecast">
        <WeatherForecastDay data={forecast[0]} />
        <WeatherForecastDay data={forecast[1]} />
        <WeatherForecastDay data={forecast[2]} />
        <WeatherForecastDay data={forecast[3]} />
        <WeatherForecastDay data={forecast[4]} />
        <WeatherForecastDay data={forecast[5]} />
        <WeatherForecastDay data={forecast[6]} />
      </div>
    );
  } else {
    const apiKey = "2d6f334a7a1c1ea688260d0e96825495";
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let forecastUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,current,minutely,alerts&appid=${apiKey}&units=metric`;
    axios.get(forecastUrl).then(handleResult);
  }
}
