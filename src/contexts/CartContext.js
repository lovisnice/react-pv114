import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  };

  const removeFromCart = (bookId) => {
    setCart((prevCart) => prevCart.filter((book) => book.id !== bookId));
  };

  const resetCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        resetCart,
        cartItemCount: cart.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
