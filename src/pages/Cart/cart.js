import { useState, useEffect } from "react";
import axios from "axios";
import Products from "../../components/Products/products.js";
import { Link } from "react-router-dom";

export default function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("https://ecommerce2-ugb8.onrender.com/api/v1/products", {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
        },
      });

      setProducts(res.data.products);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <button>
        <Link to="/">Home</Link>
      </button>
      <Products products={products} />
    </div>
  );
}
