import React from 'react';
import './Products.css';
// import Product from './Product';
import { Link } from 'react-router-dom';
// import { useState } from 'react';

function Products(props) {
    const {products} = props
    // const [productId, setProductId] = useState(0)

    // const handleBuyClick = () => {
    //     // setProductId(query)
    //     console.log()
    // }
    return (
        <div>
            {/* <h1 className="page-title">Products</h1> */}
            <div className="product-container">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <Link to={`/products/${product.id}`} className="button-link">
                            View Details
                        </Link>
                        {/* <button onClick={setProductId(id)}>
                            {product.buyButton.text}
                        </button> */}
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Products;


