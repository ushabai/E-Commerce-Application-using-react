import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import Cart from "../Cart";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [showCart, setShowCart] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/products?query=${search}`);
    }
  };

  return (
    <nav className="navbar">
      
      <div className="nav-left">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>

     
      <h3 className="nav-logo">PRETTY GAL</h3>

      
      <div className="nav-right">
        <form className="right-search" onSubmit={handleSearch}>
          <button
            type="submit"
            className="search-btn"
            style={{ background: "transparent", border: "none", cursor: "pointer" }}
          >
            <FaSearch />
          </button>
          <input
            className="search-container"
            placeholder="Search the products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <button className="cart-btn" onClick={() => setShowCart(true)}>
          Cart 
        </button>
      </div>

     
      {showCart && <Cart closeCart={() => setShowCart(false)} />}
    </nav>
  );
};

export default Navbar;
