import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import Image from "./Image";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  let [weather, setWeather] = useState();
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    const apiKey = "2d6f334a7a1c1ea688260d0e96825495";
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(weatherUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function handleResponse(result) {
    console.log(result);
    setWeather({
      temperature: Math.round(result.data.main.temp) + "°C",
      description: result.data.weather[0].main,
      humidity: result.data.main.humidity + "%",
      wind: Math.round(result.data.wind.speed) + "km per hour",
      date: new Date(result.data.dt * 1000),
      coord: result.data.coord,
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="content">
        <div className="search">
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleCity}
              type="search"
              placeholder="London"
              className="city-name"
              autoFocus="autofocus"
            />
          </form>
        </div>
        <div className="main-content">
          <div className="weather-info">
            <div className="date">
              <FormattedDate date={weather.date} />
            </div>

            <p className="temperature">{weather.temperature}</p>
            <p className="description">{weather.description} </p>
            <p className="details">
              💨 {weather.wind}
              <br />
              💧 {weather.humidity} humidity{" "}
            </p>
          </div>

          <div className="weather-image">
            <Image description={weather.description} />
          </div>
        </div>
        <div className="forecast">
          <Forecast coord={weather.coord} />
        </div>
      </div>
    );
  } else {
    const apiKey = "2d6f334a7a1c1ea688260d0e96825495";
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(weatherUrl).then(handleResponse);

    return "Loading...";
  }
}
