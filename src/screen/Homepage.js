import React, { useEffect, useState } from "react";
import Pizza from "../components/Pizza";
import { getAllPizzas } from "../actions/pizzaActions";
import { useDispatch, useSelector } from "react-redux";
import { BiCommentError, BiLoader } from "react-icons/bi";

const HomePage = () => {
  const [filteredPizzas, setfilter] = useState([]);
  const [name, setName] = useState("");
  const [itemCategory, setCategory] = useState("");
  console.log(itemCategory, name, "nnnn");
  const dispatch = useDispatch();

  const pizzasState = useSelector((state) => state.getAllPizzaReducer);
  const { allPizzaDataInfo, loading, error } = pizzasState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

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
      <>
        {filterPizzas({
          setfilter,
          allPizzaDataInfo,
          name,
          setName,
          itemCategory,
          setCategory,
        })}
        <div className="flex flex-wrap">
          {renderPizzas(
            filteredPizzas.length > 0 ? filteredPizzas : allPizzaDataInfo
          )}
        </div>
      </>
    )
  );
};

const renderPizzas = (allPizzaDataInfo) => {
  return allPizzaDataInfo.map((pizza, index) => {
    return <Pizza key={index} pizza={pizza} />;
  });
};

const filterPizzas = ({
  setfilter,
  allPizzaDataInfo,
  name,
  setName,
  itemCategory,
  setCategory,
}) => {
  const pizzaCategory = ["All", "veg", "nonveg"];

  const handleChange = (e) => {
    setName(e.target.value);
    const filteredData = allPizzaDataInfo.filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
    return setfilter(filteredData);
  };

  const handleOptionSelection = (e) => {
    setCategory(e.target.value);
    const filteredData = allPizzaDataInfo.filter(
      (item) => item.category.toLowerCase() === itemCategory.toLowerCase()
    );
    return setfilter(filteredData);
  };

  const handleFilterPizzas = () => {
    console.log(allPizzaDataInfo, "allPizzaDataInfo");
  };

  return (
    <>
      <div className="flex justify-evenly m-10 p-5  shadow-2xl border border-white-500">
        <input
          className=" w-1/5 py2 border-gray-300 focus:outline-none border placeholder:right-3"
          placeholder="Search pizzas"
          onChange={(e) => {
            handleChange(e);
          }}
          value={name}
        />
        <select
          onChange={(e) => handleOptionSelection(e)}
          placeholder="Select Category"
          className="block w-1/5  py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none "
        >
          {pizzaCategory.map((category) => {
            return (
              <>
                <option value={category}>{category}</option>
              </>
            );
          })}
        </select>

        <button
          onClick={() => {
            handleFilterPizzas();
          }}
          className="px-8 text-white rounded-sm bg-red-600"
        >
          Filter
        </button>
      </div>
    </>
  );
};

export default HomePage;
