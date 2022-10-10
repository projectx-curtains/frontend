import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Catalogue from "./pages/Catalogue";
import Consultation from "./pages/Consultation";
import CurtainBuilder from "./pages/CurtainBuilder";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import { ROUTES } from "./constants/routes";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path={ROUTES.home} element={<Home />} exact />
          <Route path={ROUTES.catalogue}>
            <Route index element={<Catalogue />} />
            <Route path={ROUTES.catalogue} element={<Catalogue />} />
            {/* TO DO: change to the different components Curtains, Baedspeads and etc.  */}
            <Route path={ROUTES.catalogueCurtains} element={<Catalogue />} />
            <Route path={ROUTES.catalogueBedspreads} element={<Catalogue />} />
            <Route path={ROUTES.cataloguePillows} element={<Catalogue />} />
            <Route path={ROUTES.catalogueFabrics} element={<Catalogue />} />
            <Route path={ROUTES.catalogueAccessories} element={<Catalogue />} />
            <Route path={ROUTES.catalogueLambrequins} element={<Catalogue />} />
          </Route>
          <Route
            path={ROUTES.curtainBuilder}
            element={<CurtainBuilder />}
            exact
          />
          <Route path={ROUTES.consultation} element={<Consultation />} exact />
          <Route path={ROUTES.shoppingCart} element={<ShoppingCart />} exact />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
