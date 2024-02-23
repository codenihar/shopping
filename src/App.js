import React from "react";
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Products from "./components/Products/Products";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home auth={{isAuth:true}}/>}></Route>
        <Route path="/login" element={<Login auth={{isAuth:true}}/>}></Route>
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;