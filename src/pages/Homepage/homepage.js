import Products from "../../components/Products/products.js";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";

export default function Homepage() {
  const { user, dispatch } = useContext(Context);
  const products = [
    { id: "1", name: "product 1", desc: "A very nice product", price: 100 },
    {
      id: "2",
      name: "product 2",
      desc: "also a very nice product",
      price: 200,
    },
    { id: "3", name: "product 3", desc: "somewhat good product", price: 300 },
    { id: "4", name: "product 4", desc: "good product", price: 500 },
    { id: "5", name: "product 5", desc: "not a good product", price: 400 },
  ];

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div>
      {user ? (
        <div>
          <button onClick={handleLogout}> Logout </button>
          <button>
            <Link to="/cart">Cart </Link>
          </button>
        </div>
      ) : (
        <div>
          <button>
            <Link to="/login">Login</Link>
          </button>
          <button>
            <Link to="/register">Register</Link>
          </button>
        </div>
      )}
      <div>
        <Products products={products} />
      </div>
    </div>
  );
}
