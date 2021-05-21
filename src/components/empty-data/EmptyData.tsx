import React from "react";

import emptyForecastImage from "../../assets/images/no-data160.png";

import "./EmptyData.css";

const EmptyData = () => {
  return (
    <div className="empty-data-block">
      <img
        src={emptyForecastImage}
        alt="empty forecast"
        className="empty-data-block__image"
      />
      <p className="empty-data-block__text">
        Fill in all the fields and the weather will be displayed
      </p>
    </div>
  );
};

export default EmptyData;
