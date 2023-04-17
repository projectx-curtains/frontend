import React, { useState } from "react";
import { cartContext } from "./index";
import { ICartContextWrapper } from "../interfaces";

const CartContextWrapper: React.FC<ICartContextWrapper> = ({ children }) => {
  const [cartContextValue, setCartContextValue] = useState({
    countQuantity: 0,
    priceProduct: 0,
  });

  return (
    <cartContext.Provider value={{ cartContextValue, setCartContextValue }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextWrapper;
