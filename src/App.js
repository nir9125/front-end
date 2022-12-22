import Login from "./pages/login/login.js";
import Register from "./pages/Register/register.js";
import Homepage from "./pages/Homepage/homepage.js";
import Cart from "./pages/Cart/cart.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/login" element={user ? <Homepage /> : <Login />} />
        <Route path="/register" element={user ? <Homepage /> : <Register />} />
        <Route path="/cart" element={user ? <Cart /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
