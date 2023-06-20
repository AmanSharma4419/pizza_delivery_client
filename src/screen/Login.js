import React, { useState } from "react";
import { userLogin } from "../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { BiLoader } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.userAuthReducer);

  if (userInfo && userInfo.userLoginData.length !== 0) {
    var { loading, error, userLoginData } = userInfo;
    Cookies.set("userId", userLoginData.data._id);
    if (userLoginData.status === 200) {
      return navigate("/");
    }
  }

  const handleSubmitLoginForm = (e) => {
    e.preventDefault();
    return dispatch(userLogin({ loginFormData }));
  };

  const { email, password } = loginFormData;

  return (
    <div class="flex justify-center items-center mt-12">
      <div class="bg-white shadow-md rounded px-8 py-6 w-1/3">
        <h2 class="text-2xl font-bold mb-6">{error ? error : "Login"}</h2>
        <form onSubmit={(e) => handleSubmitLoginForm(e)}>
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
              value={email}
              onChange={handleInputChange}
              placeholder="Enter your username"
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
              value={password}
              onChange={handleInputChange}
              placeholder="Enter your password"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {loading ? <BiLoader /> : "Login"}
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/register"
            >
              Register
            </a>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/forgot"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
