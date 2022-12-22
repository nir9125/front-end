import Products from "../../components/Products/products.js";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";

export default function Homepage() {
  const { user, dispatch } = useContext(Context);
  const products = [
    { id: "1", name: "product 1",img:require("../img/1.jpg"), desc: "A very nice product", price: 100 },
    {
      id: "2",
      name: "product 2",
      img:require("../img/2.jpg"),
      desc: "also a very nice product",
      price: 200,
    },
    { id: "3", name: "product 3",img:require("../img/3.jpg"), desc: "somewhat good product", price: 300 },
    { id: "4", name: "product 4",img:require("../img/4.jpg"), desc: "good product", price: 500 },
    { id: "5", name: "product 5",img:require("../img/5.jpg"), desc: "not a good product", price: 400 },
  ];

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div >
      {user ? (
        <div >
          <button onClick={handleLogout}> Logout </button>
          <button style={{margin:"10px 10px",backgroundColor:"green",fontWeight:"bold"}}>
            <Link style ={{color:"white",padding : "10px 10px"}} to="/cart">Cart </Link>
          </button>
        </div>
      ) : (
        <div>
          <button style={{margin:"10px 10px",backgroundColor:"green",fontWeight:"bold"}}>
            <Link style ={{color:"white",padding : "10px 10px"}} to="/login">Login</Link>
          </button>
          <button style={{margin:"10px 10px",backgroundColor:"green",fontWeight:"bold"}}>
            <Link style ={{color:"white",padding : "10px 10px "}} to="/register">Register</Link>
          </button>
        </div>
      )}
      <div>
        <Products products={products} />
      </div>
    </div>
  );
}
