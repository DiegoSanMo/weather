import React, { useContext } from "react";
import { weatherContext } from "../../context";
import { WeatherContainer, CitiesActions } from "../index";

const Form = () => {
  const { setShowWeather, showContent } = useContext(weatherContext);

  const onSubmit = (e) => {
    e.preventDefault();
    setShowWeather(true);
  };

  const hiddeContent = showContent ? "" : "show";
  return (
    <form onSubmit={(e) => onSubmit(e)} className={hiddeContent}>
      <WeatherContainer />
      <CitiesActions />
    </form>
  );
};

export default Form;
