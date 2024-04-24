import React, { useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom';

const Cart = ({ cartItems }) => {
    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);
    
    
    return (
        <div>
            {Object.entries(cartItems).length > 0 && ( // Check if cart is not empty
                <>
                    <h2>Cart</h2>
                    <ul>
                        {Object.entries(cartItems).map(([productId, product]) => (
                                <div class="card" key={productId}>
                                    <img src={product.image} class="card-img-top" alt="Image-Product" />
                                    <div class="card-body">
                                        <h5 class="card-title">{product.name}</h5>
                                        <p class="card-text">{product.price} Rupees</p>
                                        <Link to="/products" class="btn btn-primary">Buy</Link>
                                    </div>
                                </div>
                        ))}
                    </ul>
                </>
            )}
            {Object.entries(cartItems).length === 0 && <p>Your cart is empty.</p>}
        </div>
    )
}

export default Cart

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