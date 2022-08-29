import React from "react";
import sun from "./sun.png";
import cloud from "./cloud.png";
import rain from "./rain.png";
import snow from "./snow.png";
import lightning from "./lightning.png";
import haze from "./haze.png";

export default function Image(props) {
  if (props.description === "Clear") {
    return <img src={sun} className="sun" alt="Sun illustration"></img>;
  }
  if (props.description === "Clouds") {
    return <img src={cloud} className="cloud" alt="Cloud illustration"></img>;
  }
  if (props.description === "Rain" || props.description === "Drizzle") {
    return <img src={rain} className="rain" alt="Rain illustration"></img>;
  }
  if (props.description === "Snow") {
    return <img src={snow} className="snow" alt="Snowman illustration"></img>;
  }
  if (
    props.description === "Thunderstorm" ||
    props.description === "Squall" ||
    props.description === "Tornado"
  ) {
    return (
      <img
        src={lightning}
        className="lightning"
        alt="Lightning illustration"
      ></img>
    );
  }
  if (
    props.description === "Haze" ||
    props.description === "Mist" ||
    props.description === "Smoke" ||
    props.description === "Dust" ||
    props.description === "Fog" ||
    props.description === "Sand" ||
    props.description === "Ash"
  ) {
    return <img src={haze} className="haze" alt="Haze illustration"></img>;
  }
}
