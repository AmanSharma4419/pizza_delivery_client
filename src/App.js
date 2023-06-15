import NavBar from "./components/Navbar.js";
import HomePage from "./screen/HomePage.js";
import ForgotPassword from "./screen/ForgotPassword.js";
import Login from "./screen/Login.js";
import Register from "./screen/Register.js";
import Cart from "./screen/Cart.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/cart/:id" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot" element={<ForgotPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
