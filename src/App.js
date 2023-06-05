import NavBar from "./components/Navbar.js";
import Homepage from "./screen/Homepage.js";
import Login from "./screen/Login.js";
import Register from "./screen/Register.js";
import Cart from "./screen/Cart.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
