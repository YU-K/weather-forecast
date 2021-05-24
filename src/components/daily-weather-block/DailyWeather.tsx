import React, { useState } from "react";
import EmptyData from "../empty-data/EmptyData";
import SelectCity from "../select-city/SelectCity";
import WeatherService from "../../service/weather-service";
import WeatherCard from "../weather-card/WeatherCard";
import _ from "lodash";

import cities from "../../service/cities";

import "./DailyWeather.css";
import { FunctionTypeNode } from "typescript";

// interface DailyWeatherProps {
//   weather: {
//     date: string;
//     image: string;
//     temp: number;
//   };
// }

interface ForecastState {
  data: "string";
  image: "string";
  temp: number;
}

export const DailyWeather: React.FC<{}> = ({}) => {
  const weatherService = new WeatherService();

  const [weather, setWeather] = useState<ForecastState | {}>({});
  const [city, setCity] = useState<string>("");

  // const currentWeather = weatherService.getWeatherForecast(
  //   53.195873,
  //   50.100193
  //   );
  //   currentWeather.then((data: object) => console.log(data));

  // currentWeather.then((data: object) => setWeather(data));

  // console.log("weather", weather);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.currentTarget.value);
    const location: object = _.get(cities, city);
    console.log("CityState is ", city);
    console.log("location", location);
    console.log("cities", cities);
  };

  return (
    <section className="weather-block">
      <h2 className="weather-block__title">7 Days Foreсast</h2>
      <SelectCity handleChange={handleChange} />
      {/* <EmptyData /> */}
      {/* <WeatherCard weather={{ date, image, temp }} /> */}
    </section>
  );
};

export default DailyWeather;
