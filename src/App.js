import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import CurtainBuilder from "./pages/CurtainBuilder";
import Consultation from "./pages/Consultation";
import ShoppingCart from "./pages/ShoppingCart";
import DropdownColorFilter from "./components/Catalog/DropdownColorFilter";
import { sampleColorFiltersData } from "./components/Catalog/DropdownColorFilter/sampleColorFiltersData";
import { sampleDropdownFiltersData } from "./components/Catalog/DropdownFilter/sampleDropdownFiltersData";
import DropdownFilter from "./components/Catalog/DropdownFilter";

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

        {/* -- Эти блоки для наглядности -- */}
        <div>
          {sampleColorFiltersData.map((obj) => {
            return <DropdownColorFilter colorFilterData={obj} />;
          })}
        </div>
        <div>
          {sampleDropdownFiltersData.map((obj) => {
            return <DropdownFilter dropdownFilterData={obj} />;
          })}
        </div>
        {/* ---- */}
      </Router>
    </div>
  );
}

export default App;
