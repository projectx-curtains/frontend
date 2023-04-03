import { createContext, SetStateAction, Dispatch } from "react";

type CartContextType = { countQuantity: number; priceProduct: number };

interface DefaultCartContext {
  cartContextValue: CartContextType;

  setCartContextValue: Dispatch<SetStateAction<CartContextType>>;
}

export const cartContext = createContext<DefaultCartContext>({
  cartContextValue: {
    countQuantity: 0,
    priceProduct: 0,
  },
  setCartContextValue: () => {},
});
