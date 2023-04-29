import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <h1 className="header-logo">React Meal</h1>
        <div className="header-cart">
          <span>Your Cart</span>
          <span className="cart-count">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
