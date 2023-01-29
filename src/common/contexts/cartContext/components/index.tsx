import { createContext, SetStateAction, Dispatch } from "react";

interface DefaultCartContext {
  cartContextValue: {
    countQuantity: number;
    priceProduct: number;
  };
  setCartContextValue: Dispatch<
    SetStateAction<{ countQuantity: number; priceProduct: number }>
  >;
}

export const cartContext = createContext<DefaultCartContext>({
  cartContextValue: {
    countQuantity: 0,
    priceProduct: 0,
  },
  setCartContextValue: () => {},
});
