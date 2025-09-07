import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "./redux/cartSlice";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ closeCart }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <button onClick={closeCart} className="close-cart">X</button>
        <h2>Your Cart is Empty</h2>
      </div>
    );
  }

  return (
    <div className="cart">
      <button onClick={closeCart} className="close-cart">X</button>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} className="cart-img" />
          <div className="cart-info">
            <h4>{item.title}</h4>
            <p>Price: Rs {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <h3>Total: Rs {totalPrice.toLocaleString()}</h3>
      <button onClick={() => dispatch(clearCart())} className="clear-cart">
        Clear Cart
      </button>
      <Link to="/checkout">
        <button className="checkout-btn">Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
