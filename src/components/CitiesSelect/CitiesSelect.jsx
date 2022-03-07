import React, { useContext } from "react";

import City from "../City/City";
import "./CitiesSelect.css";

import { cities } from "../../Constants/index";
import { weatherContext } from "../../context";

export default function CitiesSelect() {
  const { setCity, setShowWeather } = useContext(weatherContext);

  const handlerCity = (e) => {
    const cityN = e.target.value;
    setCity(cityN);
    setShowWeather(false);
  };

  const loadCities = cities.map((city, index) => (
    <City key={index} name={city} />
  ));

  return (
    <div className="select-style">
      <select onChange={(e) => handlerCity(e)}>{loadCities}</select>
      <div className="arrows">
        <img
          className="up"
          src="https://img.icons8.com/ios-glyphs/30/000000/expand-arrow--v1.png"
          alt=""
        />
        <img
          className="down"
          src="https://img.icons8.com/ios-glyphs/30/000000/expand-arrow--v1.png"
          alt=""
        />
      </div>
    </div>
  );
}
