import React from "react";

import "./WeatherCard.css";

interface WeatherCardProps {
  // weather: { date: string; image: string; temp: number };
  weather: { date: string; image: string; temp: number };
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  const { image, date, temp } = weather;
  return (
    <div className="weather-card">
      <div className="weather-card__body">
        <h5 className="weather-card__title">22 may 2021</h5>
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          className="weather-card__image"
          alt="..."
        />
        <p className="weather-card__text">+17°</p>
      </div>
    </div>
  );
};

export default WeatherCard;
