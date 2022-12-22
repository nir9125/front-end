import Products from "../../components/Products/products.js";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";

export default function Homepage() {
  const { user, dispatch } = useContext(Context);
  const products = [
    { id: "1", name: "product 1",img:"https://drive.google.com/uc?export=view&id=1LH2ThIDn7pvVPAJaASzYlYchHEwzj9tq", desc: "A very nice product", price: 100 },
    {
      id: "2",
      name: "product 2",
      img:"https://drive.google.com/uc?export=view&id=1WRZDFaAwFdxOzXH3BidwMLO2oveHP3DY",
      desc: "also a very nice product",
      price: 200,
    },
    { id: "3", name: "product 3",img:"https://drive.google.com/uc?export=view&id=18gudlqYCJTcyo5lHZGzAVo063Q8dsLXX", desc: "somewhat good product", price: 300 },
    { id: "4", name: "product 4",img:"https://drive.google.com/uc?export=view&id=1O4331EuRzcOLET4wSLo5CQzjO3A0Y9Gi", desc: "good product", price: 500 },
    { id: "5", name: "product 5",img:"https://drive.google.com/uc?export=view&id=1jfsIsPIf5x4l4d6DQ6FiRceuB0dcIiHZ", desc: "not a good product", price: 400 },
  ];

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div >
      {user ? (
        <div >
          <button style={{margin:"10px 10px",backgroundColor:"green",fontWeight:"bold",color:"white"}} onClick={handleLogout}> Logout </button>
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
