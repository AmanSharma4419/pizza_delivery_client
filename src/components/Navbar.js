/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { LuPizza } from "react-icons/lu";
import { BsCart4 } from "react-icons/bs";
const NavBar = () => {
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#"
            className="text-gray-300  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            <LuPizza className="inline-block w-8 h-8" />
            Delicious Pizza
          </a>
          <div>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Cart
              <BsCart4 className="inline-block h-7 w-7 px-1" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
