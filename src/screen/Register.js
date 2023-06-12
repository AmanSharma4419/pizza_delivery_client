/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { userRegister } from "../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { BiLoader } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const [signupFormData, setSignupFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [userProfileImg, setUserProfileImg] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUserProfileImg = (e) => {
    setUserProfileImg(e.target.files[0]);
  };

  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.userRegisterReducer);
  const { loading, error, user } = userInfo;

  const handleSubmitRegisterationForm = (e) => {
    e.preventDefault();
    dispatch(userRegister(signupFormData, userProfileImg));
  };
  const navigate = useNavigate();
  if (user.status === 200) {
    navigate("/login");
  }
  const { name, email, password } = signupFormData;
  return (
    <div class="flex justify-center items-center mt-12">
      <div class="bg-white shadow-md rounded px-8 py-6 w-1/3">
        <h2 class="text-2xl font-bold mb-6">{error ? error : "Register"}</h2>
        <form
          onSubmit={(e) => {
            handleSubmitRegisterationForm(e);
          }}
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              name
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              placeholder="Enter your username"
              value={name}
              onChange={handleInputChange}
            />
          </div>
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
              placeholder="Enter your username"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleInputChange}
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="profileImg"
            >
              Profile Image
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="profileImage"
              type="file"
              onChange={handleUserProfileImg}
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-center text-white font-bold py-2 w-24 rounded focus:outline-none focus:shadow-outline "
              type="submit"
            >
              {loading ? <BiLoader className="w-12 h-6" /> : "Register"}
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/login"
            >
              <span> Already have account </span> login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
