import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import data from '../Data/sample.json';
import './ProductDetails.css';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [productDetail, setProductDetail] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const findDetail = data.product.find(p => p.id === Number(id));
    if (findDetail) {
      setProductDetail(findDetail);
    }
  }, [id]);

  if (!productDetail) return <h2>Product not found</h2>;

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: productDetail.id,
      title: productDetail.title,
      price: productDetail.price,
      image: productDetail.image,
      quantity: quantity,
    }));
    alert("Item added to cart!");
  };

  return (
    <div>
      <h2 className="productdetail-heading">PRODUCT DETAILS</h2>
      <div className="productdetail-display">
        <div>
          <img
            className="productdetail-img"
            src={productDetail.image}
            alt={productDetail.title}
          />
        </div>
        <div className="productdetail-info">
          <h1 className="productdetail-title">{productDetail.title}</h1>
          <p className="productdetail-price">
            Rs {productDetail.price.toLocaleString()}
          </p>
          <div className="quantity-section">
            <button className="qty-btn" onClick={handleMinusQuantity}>-</button>
            <span className="qty-display">{quantity}</span>
            <button className="qty-btn" onClick={handlePlusQuantity}>+</button>
          </div>
          <button onClick={handleAddToCart} className="add-btn">
            Add to Cart
          </button>
          <p className="productdetail-description">{productDetail.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
