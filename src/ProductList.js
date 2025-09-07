import React from "react";
import { useLocation } from "react-router-dom";
import data from "../src/Data/sample.json"; // Import JSON file

const ProductList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get("query") || "";

  // Use data.product from your JSON
  const filteredProducts = data.product.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Results for: "{search}"</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                width: "200px",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h3>{product.title}</h3>
              <p>₹{product.price}</p>
              <p>{product.category}</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
