import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Catalogue from "./pages/Catalogue";
import Consultation from "./pages/Consultation";
import CurtainBuilder from "./pages/CurtainBuilder";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
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
        <Footer />
      </Router>
    </div>
  );
}

export default App;
