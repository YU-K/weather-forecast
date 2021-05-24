import React, { useState } from "react";
import EmptyData from "../empty-data/EmptyData";
import SelectCity from "../select-city/SelectCity";

import "./PastWeather.css";

const PastWeather: React.FC<{}> = () => {
  const [city, setCity] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.currentTarget.value);
  };

  return (
    <section className="weather-block">
      <h2 className="weather-block__title">Forecast for a Date in the Past</h2>
      <SelectCity handleChange={handleChange} />
      <input className="select" type="date" placeholder="Select date" />
      <EmptyData />
    </section>
  );
};

export default PastWeather;
