import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__title">
        <div className="header__text-lvl1">Weather </div>
        <div className="header__text-lvl2">forecast</div>
      </div>
    </header>
  );
};

export default Header;
