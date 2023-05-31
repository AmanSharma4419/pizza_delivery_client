import React from "react";
import Pizza from "../components/Pizza";
import pizzas from "../pizzasdata";

const renderPizzas = () => {
  return pizzas.map((pizza, index) => {
    return <Pizza key={index} pizza={pizza} />;
  });
};
const Homepage = () => {
  return <div className="flex flex-wrap">{renderPizzas()}</div>;
};

export default Homepage;
