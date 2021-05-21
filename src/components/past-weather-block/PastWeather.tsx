import React from "react";
import EmptyData from "../empty-data/EmptyData";
import SelectCity from "../select-city/SelectCity";

import "./PastWeather.css";

const PastWeather = () => {
  return (
    <section className="weather-block">
      <h2 className="weather-block__title">Forecast for a Date in the Past</h2>
      <SelectCity />
      <input className="select" type="date" placeholder="Select date" />
      <EmptyData />
    </section>
  );
};

export default PastWeather;
