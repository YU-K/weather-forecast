import React from "react";
import EmptyData from "../empty-data/EmptyData";
import SelectCity from "../select-city/SelectCity";

import "./DailyWeather.css";

const DailyWeather = () => {
  return (
    <section className="weather-block">
      <h2 className="weather-block__title">7 Days Foreсast</h2>
      <SelectCity />
      <EmptyData />
    </section>
  );
};

export default DailyWeather;
