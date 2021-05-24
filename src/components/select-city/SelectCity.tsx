import React from "react";

import "./SelectCity.css";

interface handleChangeProp {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectCity: React.FC<handleChangeProp> = ({ handleChange }) => {
  return (
    <select className="select" name="select" onChange={handleChange}>
      <option value="" disabled selected hidden>
        Select city
      </option>
      <option>Samara</option>
      <option>Tolyatti</option>
      <option>Saratov</option>
      <option>Kazan</option>
      <option>Krasnodar</option>
    </select>
  );
};

export default SelectCity;
