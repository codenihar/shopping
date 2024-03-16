import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Products from "./components/Products/Products";
import Navbar from "./components/NavBar/Navbar";
import { productsData } from "./components/Products/ProductData";


const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    setProducts(productsData);
    setFilteredProducts(productsData);
  }, []);

  const handleSearchButtonClick = (query) => {
    const filtered = products.filter(product=>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered)
  }
  return (
    <BrowserRouter>
      <Navbar onSearchButtonClick={handleSearchButtonClick} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home auth={{ isAuth: true }} />}></Route>
          <Route path="/login" element={<Login auth={{ isAuth: true }} />}></Route>
          <Route path="/products" element={<Products products={filteredProducts} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;