import { createContext } from "react";
// import {SetStateAction, Dispatch } from "react";

interface DefaultСatalogItemContext {
  catalogItemContextValue: boolean;
  setCatalogItemContextValue: any;
  // setCatalogItemContextValue: Dispatch<
  //   SetStateAction<{ catalogItemContextValue: boolean }>
  // >;
}

export const catalogItemContext = createContext<DefaultСatalogItemContext>({
  catalogItemContextValue: false,
  setCatalogItemContextValue: () => {},
});
