import React, { useContext, useEffect, useState } from "react";
import "../../App.css";
import { weatherContext } from "../../context";
import { WeatherCard, CitiesSelect } from "../index";

import { cleanData } from "../../utilities/index";
import "./WeatherContainer.css";
import axios from "axios";
import { API_KEY } from "../../Constants";

const WeatherContainer = () => {
  const { city, showWeather } = useContext(weatherContext);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${API_KEY}`
        )
        .then((resp) => resp.data.data)
        .then((data) => cleanData(data))
        .then((weather) => setWeather(weather));
    };
    fetchData();
  }, [city]);

  const weatherCardList = weather.map((city, index) => (
    <WeatherCard key={index} city={city} />
  ));

  const displayData = showWeather ? weatherCardList : null;

  return (
    <>
      <div className="cities_container">
        <label className="cities_subtitle">City</label>
        <div className="cities_select">
          <CitiesSelect />
        </div>
        <div className="weather_list">{displayData}</div>
      </div>
    </>
  );
};

export default WeatherContainer;
