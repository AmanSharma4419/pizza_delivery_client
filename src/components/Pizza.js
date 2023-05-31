import React, { useState } from "react";
import Modal from "./Modal";
const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [modalOpen, handleModal] = useState({
    isOpen: false,
  });

  const handleModalClose = () => {
    return handleModal({ ...modalOpen, isOpen: false });
  };
  const handleModalOpen = () => {
    return handleModal({ ...modalOpen, isOpen: true });
  };

  return (
    <>
      <div className={`w-96 h-auto shadow-2xl m-12 `}>
        <div className="flex flex-col justify-center items-center pt-4">
          <p className="font-semibold text-lg subpixel-antialiased">
            {pizza.name}
          </p>
          <Modal
            title={pizza.name}
            img={pizza.image}
            desc={pizza.description}
            isOpen={modalOpen.isOpen}
            onClose={handleModalClose}
            onClick={handleModalOpen}
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
          <button className="bg-red-500 text-white p-2">Add To Cart</button>
        </div>
      </div>
    </>
  );
};

export default Pizza;
