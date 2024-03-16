import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, Router } from 'react-router-dom'
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Products from "./components/Products/Products";
import Navbar from "./components/NavBar/Navbar";
import { products } from "./components/Products/ProductData";


const App = () => {
  const [productsState, setProductsState] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    setProductsState(products);
    setFilteredProducts(products);
  }, []);

  const handleSearchInputChange = (query) => {
    const filtered = products.filter(product=>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered)
  }
  return (
    <BrowserRouter>
      <Navbar onSearchInputChange={handleSearchInputChange} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home auth={{ isAuth: true }} />}></Route>
          <Route path="/login" element={<Login auth={{ isAuth: true }} />}></Route>
          <Route path="/products" element={<Products productsState={filteredProducts} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;