import Product from "../product/product";
import "./products.css";

export default function Products({ products }) {
  //console.log(products)
  //products.map((p, i) => (console.log(p,i)));
  return (
    <div className="posts">
      {products.map((p, i) => (
        
        <Product key={i} product={p} />
      ))}
    </div>
  );
}
