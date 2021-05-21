import React from "react";
import DailyWeather from "../daily-weather-block/DailyWeather";
import PastWeather from "../past-weather-block/PastWeather";

import "./Container.css";

const Container = () => {
  return (
    <div className="container">
      <div className="container__d-flex">
        <DailyWeather />
        <PastWeather />
      </div>
    </div>
  );
};

export default Container;
