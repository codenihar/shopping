import React, { useEffect, useState } from "react";
import "../src/App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Products from "./components/Products/Products";
import Navbar from "./components/NavBar/Navbar";
import { productsData } from "./components/Products/ProductData";
import Product from "./components/Products/Product";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    setProducts(productsData);
    setFilteredProducts(productsData);
  }, []);

  const handleSearchButtonClick = (query) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const addToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    if (productToAdd) {
      setCartItems((prevCartItems) => ({
        ...prevCartItems,
        [productId]: productToAdd, // Add the complete product object
      }));
    }
  };
  // console.log(getProductDetailsById)
  return (
    <BrowserRouter>
      <Navbar onSearchButtonClick={handleSearchButtonClick} />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route
            exact
            path="/products"
            element={
              <Products
                products={filteredProducts}
                addToCartCallprop={addToCart}
              />
            }
          />
          <Route exact path="/products/:productId" element={<Product />} />
          <Route exact path="/cart" element={<Cart cartItems={cartItems} />} />
          {/* <Route exact path="/products/:productId" element={<Product productName={products.name} productImage={products.image} productPrice={products.price} />} />  */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
