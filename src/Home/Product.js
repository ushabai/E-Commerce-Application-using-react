import './Product.css';
import { Link } from "react-router-dom";

export const Product = ({ id, title, price, imageUrl }) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="product-card">
        <img src={imageUrl} alt={title} />
        <h5>{title}</h5>
        <h5>Rs {price}</h5>
      </div>
    </Link>
  );
};
