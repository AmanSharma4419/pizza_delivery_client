/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { LuPizza } from "react-icons/lu";
import { BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Cookies from "js-cookie";

const NavBar = () => {
  const id = Cookies.get("userId");
  const token = Cookies.get("token");

  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cartReducer);
  var { cartItemsList } = cartItems;

  const handleCartIconClick = () => {
    if (id) {
      return navigate(`/cart/${id}`);
    } else {
      return navigate(`/login`);
    }
  };

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="/"
            className="text-gray-300  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            <LuPizza className="inline-block w-10 h-8" />
            Delicious Pizza
          </a>
          <div>
            <a
              href="/login"
              className="text-gray-300  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {id && token ? "Logout" : "Login"}
            </a>
            <a
              onClick={() => {
                handleCartIconClick();
              }}
              className="text-gray-300  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Cart ({cartItemsList.length})
              <BsCart4 className="inline-block w-10 h-7 px-1" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
