import React, { useEffect, useState } from "react";
import Pizza from "../components/Pizza";
import { getAllPizzas } from "../actions/pizzaActions";
import { useDispatch, useSelector } from "react-redux";
import { BiCommentError, BiLoader } from "react-icons/bi";

const HomePage = () => {
  const [filteredPizzas, setfilter] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(9);
  const dispatch = useDispatch();

  const pizzasState = useSelector((state) => state.getAllPizzaReducer);
  const { allPizzaDataInfo, loading, error, totalPagesCount } = pizzasState;

  const handlePrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(1);
    }
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(getAllPizzas({ limit, page }));
  }, [page, dispatch, limit]);

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
        })}
        <div className="flex flex-wrap">
          {renderPizzas(
            filteredPizzas.length > 0 ? filteredPizzas : allPizzaDataInfo
          )}
          <div className="flex justify-center py-10 w-full">
            <button
              className="mx-10"
              onClick={() => {
                handlePrevClick();
              }}
            >
              ...Prev{" "}
            </button>
            {page}
            <button
              className="mx-10"
              disabled={totalPagesCount === page}
              onClick={() => {
                handleNextClick();
              }}
            >
              Next...
            </button>
          </div>
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

const filterPizzas = ({ setfilter, allPizzaDataInfo }) => {
  const pizzaCategory = ["All", "veg", "nonveg"];

  let filteredData = [];
  const handleChange = (e) => {
    filteredData = allPizzaDataInfo.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (filteredData.length === 0) {
      alert("No Pizza Found");
    } else {
      setfilter(filteredData);
    }
  };

  const handleOptionSelection = (e) => {
    filteredData = allPizzaDataInfo.filter(
      (item) => item.category.toLowerCase() === e.target.value.toLowerCase()
    );
  };

  const handleFilterPizzas = () => {
    return setfilter(filteredData);
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
