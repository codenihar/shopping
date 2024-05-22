import React from "react";
import "./Products.css";
// import Product from './Product';
import { Link } from "react-router-dom";
// import { useState } from 'react';

function Products(props) {
  const { products, addToCartCallprop } = props;
  // const [productId, setProductId] = useState(null)
  // const [cartItemId, setCartItemId] = useState(null)
  // const addToCartCall = (id) => {
  //     setCartItemId(id)
  //     console.log(cartItemId)
  //     addToCartCallprop(cartItemId)
  // }
  return (
    <div>
      {/* <h1 className="page-title">Products</h1> */}
      <div className="container-fluid justify-content-center text-center align-items-center">
        <div class="row">
          {products.map((product) => (
            <div className="col-12 col-md-6 col-lg-4 my-3 g-5">
              <div
                key={product.id}
                className="card border-light shadow w-100 mb-3"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-top-img w-100"
                  id="productsImg"
                  style={{ height: "200px;" }}
                />
                <div className="card-body">
                  <h3 className="card-title">{product.name}</h3>
                  <div className="mt-4 mb-3">
                    <Link
                      to={`/products/${product.id}`}
                      className="mx-2 mb-2"
                      id="button"
                    >
                      Buy Now
                    </Link>
                    <button
                      onClick={() => addToCartCallprop(product.id)}
                      className="mx-2"
                      id="button"
                    >
                      Add to Cart
                    </button>
                    {/* <button onClick={setProductId(id)}>
                            {product.buyButton.text}
                        </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
