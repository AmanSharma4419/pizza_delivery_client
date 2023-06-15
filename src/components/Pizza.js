import React, { useState } from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { itemAddToCart } from "../actions/cartActions";
import { BiCommentError, BiLoader } from "react-icons/bi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const history = useNavigate();
  const addItemToCart = (item) => {
    const token = Cookies.get("token");
    if (token) {
      const { name, image } = item;
      const price = item.prices.reduce(
        (total, pizza) => total + pizza[varient] * quantity,
        0
      );
      const itemData = {
        name,
        image,
        varient,
        price,
        quantity,
      };
      dispatch(itemAddToCart(itemData));
      return history("/cart");
    } else {
      return history("/login");
    }
  };
  const item = useSelector((state) => state.cartReducer);
  const { itemAddedToCart, error, loading } = item;
  return (
    <>
      <div
        className={`w-96 h-auto shadow-2xl m-12 border-solid border-2 border-black-500 transition duration-150  shadow-black-500/50 cursor-pointer`}
      >
        <div className="flex hover:shadow-inner flex-col justify-center items-center pt-4">
          <p className="font-semibold text-lg subpixel-antialiased">
            {pizza.name}
          </p>
          <Modal
            title={pizza.name}
            img={pizza.image}
            desc={pizza.description}
          />
          <img
            className="w-52 h-52 rounded-full"
            src={pizza.image}
            alt="pizza..."
          />
        </div>
        <div className="flex justify-evenly mt-2">
          <div className="flex flex-col font-semibold">
            <label for="varients">Varients:</label>
            <select
              className="border border-black"
              name="varients"
              id="varients"
              onChange={(e) => {
                setVarient(e.target.value);
              }}
            >
              {pizza.varients.map((varient, index) => {
                return <option value={varient}>{varient}</option>;
              })}
            </select>
          </div>
          <div className="flex flex-col font-semibold">
            <label for="quantity">Quantity:</label>
            <select
              className="border border-black px-2"
              name="quantity"
              id="quantity"
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            >
              {[...Array(10).keys()].map((qty) => {
                return <option value={qty + 1}>{qty + 1}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="flex justify-evenly mt-2 items-baseline rounded-2xl font-semibold pb-2">
          {pizza.prices.map((price, index) => {
            return (
              <span key={index}>
                Price: &nbsp; {price[varient] * quantity} INR/-
              </span>
            );
          })}
          <button
            onClick={() => {
              addItemToCart(pizza);
            }}
            className="bg-red-500 text-white p-2"
          >
            {loading ? <BiLoader /> : "Add To Cart"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Pizza;
