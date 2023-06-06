import React, { useEffect } from "react";
import Pizza from "../components/Pizza";
import { getAllPizzas } from "../actions/pizzaActions";
import { useDispatch, useSelector } from "react-redux";
import { BiCommentError, BiLoader } from "react-icons/bi";

const Homepage = () => {
  const dispatch = useDispatch();

  const pizzasState = useSelector((state) => state.getAllPizzaReducer);
  const { allPizzaDataInfo, loading, error } = pizzasState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return loading ? (
    <div className="flex font-semibold flex-col items-center justify-center mt-[15%]">
      <BiLoader className="w-20 h-20" />
      <h1>Loading...</h1>
    </div>
  ) : error ? (
    <div className="flex font-semibold flex-col items-center justify-center mt-[15%]">
      <BiCommentError className="w-20 h-20" />
      <h1>{error}</h1>
    </div>
  ) : (
    allPizzaDataInfo.length > 0 && (
      <div className="flex flex-wrap">{renderPizzas(allPizzaDataInfo)}</div>
    )
  );
};

const renderPizzas = (allPizzaDataInfo) => {
  return allPizzaDataInfo.map((pizza, index) => {
    return <Pizza key={index} pizza={pizza} />;
  });
};

export default Homepage;
