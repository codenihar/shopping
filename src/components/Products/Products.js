import React, { useState } from 'react';
import './Products.css';
// import Products_nav from './Products_nav';

function Products(props) {
    const {productsState} = props
    return (
        <div>
            {/* <h1 className="page-title">Products</h1> */}
            <div className="product-container">
                {productsState.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <button onClick={product.buyButton.onClick}>
                            {product.buyButton.text}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Products;



{/* <Products_nav/> */ }
{/* <div className="Nav-div">
<nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand" href="/">Products</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Link</a>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)}/>
                {/* <button className="btn btn-outline-success" type="submit">Search</button></form></div></div></nav></div> */}