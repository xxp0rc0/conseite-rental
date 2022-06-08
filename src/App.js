import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home"
import "./pages/home.css"
import Brands from "./components/Brands/Brands";
import Products from "./pages/Brand-detail/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./pages/Product/Product";
import {Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />

        <Route path="/brands" element={<Brands />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
