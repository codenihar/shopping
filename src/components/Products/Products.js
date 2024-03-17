import React from 'react';
import './Products.css';

function Products(props) {
    const {products} = props
    return (
        <div>
            {/* <h1 className="page-title">Products</h1> */}
            <div className="product-container">
                {products.map(product => (
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


