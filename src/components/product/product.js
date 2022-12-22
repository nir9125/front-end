import "./product.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Product({ product }) {
  const handleClick = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:5000/api/v1/product",
      {
        id: product.id,
        name: product.name,
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
      <p className="postDesc">{product.desc}</p>

      <button onClick={handleClick}>Add</button>
    </div>
  );
}
