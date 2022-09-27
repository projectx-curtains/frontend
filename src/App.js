import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import CurtainBuilder from "./pages/CurtainBuilder";
import Consultation from "./pages/Consultation";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  const footerRef = useRef(null);

  return (
    <div className="app">
      <Router>
        <Header footerSection={footerRef} />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/catalogue">
            <Route index element={<Catalogue />} />
            <Route path=":id" element={<Catalogue />} />
          </Route>
          <Route path="/curtain-builder" element={<CurtainBuilder />} exact />
          <Route path="/consultation" element={<Consultation />} exact />
          <Route path="/shopping-cart" element={<ShoppingCart />} exact />
        </Routes>
        <Footer ref={footerRef} />
      </Router>
    </div>
  );
}

export default App;
