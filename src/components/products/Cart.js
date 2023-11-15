import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./CartStyle.css";

const Cart = () => {
  const { cart, removeFromCart, resetCart, cartItemCount } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Shopping Cart</h2>
      <p className="cart-item-count">Cart Item Count: {cartItemCount}</p>
      {cart.map((book) => (
        <div className="cart-item" key={book.id}>
          <p className="cart-item-title">Title: {book.title}</p>
          <p className="cart-item-pages">Pages: {book.pages}</p>
          <button className="remove-btn" onClick={() => removeFromCart(book.id)}>
            Remove from Cart
          </button>
        </div>
      ))}
      <button className="reset-btn" onClick={resetCart}>
        Reset Cart
      </button>
    </div>
  );
};

export default Cart;
