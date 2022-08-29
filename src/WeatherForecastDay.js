import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemperature = Math.round(props.data.temp.max);
    return `${maxTemperature}°c`;
  }

  function date() {
    let date = new Date(props.data.dt * 1000);
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    let day = days[date.getDay()];
    return day;
  }

  function returnIcon() {
    let icon = props.data.weather[0].icon;
    let iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    return <img src={iconUrl} alt="Weather icon" className="icon" />;
  }

  return (
    <div className="forecast-tile">
      <div className="forecast-day">{date()}</div>
      <div className="forecast-icon">{returnIcon()}</div>
      <span className="forecast-max">{maxTemperature()}</span>
    </div>
  );
}
