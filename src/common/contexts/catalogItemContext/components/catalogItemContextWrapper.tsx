import React, { useState } from "react";
import { catalogItemContext } from "./index";
import { IСatalogItemContextWrapper } from "../interfaces";

const СatalogItemContextWrapper: React.FC<IСatalogItemContextWrapper> = ({
  children,
}) => {
  const [catalogItemContextValue, setCatalogItemContextValue] = useState(false);

  return (
    <catalogItemContext.Provider
      value={{ catalogItemContextValue, setCatalogItemContextValue }}>
      {children}
    </catalogItemContext.Provider>
  );
};

export default СatalogItemContextWrapper;
