import React from "react";
import './Weather.css'

export default function WeatherImg(props) {
  const { iconPath, title } = props.img;
  return (
    <div className="img-container">
      <img className="weather_img" src={iconPath} alt={title} />
      <span className="description">{title}</span>
    </div>
  );
}
