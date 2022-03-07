import React, { useEffect, useState } from "react";
import "./WeatherCard.css";

import { getImageFromName, getValuesFromDate } from "../../utilities/index";
import { weatherDictionary } from "../../Constants";
import WeatherImg from "../WeatherImg/WeatherImg";

const WeatherCard = (props) => {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    setWeatherData({ ...props.city });
  }, [props.city]);

  const iconPath = weatherData.icon ? getImageFromName(weatherData.icon) : null;
  const { month, dayName, day } = getValuesFromDate(weatherData.valid_date);
  const title = weatherData.code ? weatherDictionary[weatherData.code] : null;

  return (
    <div className="weather_container">
      <span className="city_data">
        <label>{dayName}</label>
        <label>{month + " " + day}</label>
      </span>
      <WeatherImg img={{ iconPath, title }} />

      <label className="temperature">{weatherData.temp}ºC</label>
    </div>
  );
};

export default WeatherCard;
