import React from "react";
import Container from "../container/Container";
import Header from "../header/Header";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Container />
    </div>
  );
};

export default App;
