import Product from "../product/product";
import "./products.css";

export default function Products({ products }) {
  return (
    <div className="posts">
      {products.map((p, i) => (
        <Product key={i} product={p} />
      ))}
    </div>
  );
}
