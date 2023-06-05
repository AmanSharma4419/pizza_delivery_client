import React, { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex justify-between">
      <div className="ml-32 w-[40%]">
        <h1 className="text-center font-bold text-3xl py-6">My Cart</h1>
        <div className="flex justify-between pb-8 border-y-4 border-slate-100">
          <div className="py-4">
            <p>PEEPER BABREQUE CHICKEN</p>
            <span>Price</span> : {quantity * 200}
            <div className="flex">
              <span>Quantity :</span>
              <div className="flex justify-evenly ml-3">
                <AiFillPlusCircle
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                  className="mr-2"
                />
                {quantity}
                <AiFillMinusCircle
                  onClick={() => {
                    setQuantity(quantity - 1);
                  }}
                  className="ml-2"
                />
              </div>
            </div>
          </div>
          <div>
            <img
              className="w-24 h-24 mt-4"
              src="https://www.dominos.co.in/files/items/Pepper_Barbeque.jpg"
              alt="img."
            />
          </div>
        </div>
      </div>
      <div className="mr-40 py-6 ">
        <h1 className="font-bold text-3xl">SubTotal=700 /- INR</h1>
        <button className="bg-red-600 py-2 px-5 text-white ml-[50%] mt-4">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
