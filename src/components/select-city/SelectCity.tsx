import React from "react";

import "./SelectCity.css";

const SelectCity = () => {
  return (
    <select className="select" name="select">
      <option value="" disabled selected hidden>
        Select city
      </option>
      <option value="samara">Samara</option>
      <option value="tolyatti">Tolyatti</option>
      <option value="saratov">Saratov</option>
      <option value="kazan">Kazan</option>
      <option value="krasnodar">Krasnodar</option>
    </select>
  );
};

export default SelectCity;
