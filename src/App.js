import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import CurtainBuilder from "./pages/CurtainBuilder";
import Consultation from "./pages/Consultation";
import ShoppingCart from "./pages/ShoppingCart";
import PriceRangeFilter from "./components/Catalog/PriceRangeFilter";

function App() {
  const footerRef = useRef(null);

  return (
    <div className="app">
      <Router>
        <Header footerSection={footerRef} />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/catalogue" element={<Catalogue />} exact />
          <Route path="/curtain-builder" element={<CurtainBuilder />} exact />
          <Route path="/consultation" element={<Consultation />} exact />
          <Route path="/shopping-cart" element={<ShoppingCart />} exact />
        </Routes>
        <Footer ref={footerRef} />
        <PriceRangeFilter
          minPrice={0}
          maxPrice={2000}
          minPriceDifference={50}
          minPriceOnTheScreen={25}
          maxPriceOnTheScreen={1000}
        />
      </Router>
    </div>
  );
}

export default App;
