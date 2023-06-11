/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState({
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmail((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div class="flex justify-center items-center mt-12">
      <div class="bg-white shadow-md rounded px-8 py-6 w-1/3">
        <h2 class="text-2xl font-bold mb-6">Forgot Password</h2>
        <form>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Email
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="text"
              value={email.email}
              onChange={handleInputChange}
              placeholder="Enter your username"
            />
          </div>
          <div class="flex items-center justify-between">
            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Submit
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
