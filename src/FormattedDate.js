import React from "react";

export default function formattedDate(props) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = String(props.date.getMinutes()).padStart(2, "0");
  let date = props.date.getDate();
  let month = months[props.date.getMonth()];

  return (
    <div>
      {day} {date} {month}
      <br />
      {hours}:{minutes}
    </div>
  );
}
