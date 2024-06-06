import React, { useEffect } from "react";
import "./Cart.css";
import "../Products/Products.css";
import { Link } from "react-router-dom";

const Cart = ({ cartItems }) => {
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <div>
      {Object.entries(cartItems).length > 0 && ( // Check if cart is not empty
        <>
          <h2 className="my-4" id="cartTitle">
            Cart
          </h2>
          <div className="row mt-4 mb-5">
            {Object.entries(cartItems).map(([productId, product]) => (
              <div className="col-6 col-md-4 col-lg-3 my-3 g-3">
                <div
                  key={product.id}
                  className="card border-light shadow w-100 mb-3"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-top-img w-100"
                    id="productsImg"
                  />
                  <div className="card-body">
                    <div className="card-title" id="productTitle">
                      {product.name}
                    </div>

                    <div className="card-text" id="productText">
                      {product.subtitle}
                    </div>

                    <div className="priceText mt-3">
                      <div className="card-text" id="priceOffer">
                        ₹{product.offerprice}
                      </div>

                      <div className="card-text mx-2" id="priceOriginal">
                        ₹{product.originalprice}
                      </div>

                      <div className="" id="discount">
                        {product.discount}% OFF
                      </div>
                    </div>

                    <div className="mt-4 mb-3 text-center">
                      <Link
                        to="/products"
                        className="mx-2 mb-2 w-75"
                        id="button"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              // <div class="card" key={productId}>
              //     <img
              //       src={product.image}
              //       class="card-img-top"
              //       alt="Image-Product"
              //     />
              //     <div class="card-body">
              //       <h5 class="card-title" id="productTitle">
              //         {product.name}
              //       </h5>
              //       <p class="card-text" id="productText">
              //         {product.price} Rupees
              //       </p>
              //       <Link to="/products" class="btn btn-primary" id="button">
              //         Buy
              //       </Link>
              //     </div>
            ))}
          </div>
        </>
      )}
      {Object.entries(cartItems).length === 0 && <p>Your cart is empty.</p>}
    </div>
  );
};

export default Cart;

// <div className='cart'>
//     {cartItems.length > 0 && (
//         <>
//             <h2>Cart</h2>
//             <ul>
//                 {cartItems.map(item => (
//                     <li key={item.id}>{item.name} - ${item.price}</li>
//                 ))}
//             </ul>
//         </>
//     )}
//     {cartItems.length === 0 && <p>Your cart is empty.</p>}
// </div>
