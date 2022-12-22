import "./product.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Product({ product }) {
  const handleClick = async (e) => {
    console.log(product);
    e.preventDefault();
    const res = await axios.post(
      "https://ecommerce2-ugb8.onrender.com/api/v1/product",
      {
        id: product.id,
        name: product.name,
        img:product.img,
        desc: product.desc,
        price: product.price,
        quantity: 1,
      },
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
        },
      }
    );

    console.log(res);
    
  };
  return (
    
    <div className="post">
      <p className="postDesc">{product.name}</p>
      <img style={{width:"200px",height:"200px",margin:"10px"}} src={product.img}/> 
      
      <p className="postDesc">{product.desc}</p>

      <button style={{padding:"20px 40px",fontSize:"20px"}} onClick={handleClick}>Add</button>
    </div>
  );
}
