import React, { useEffect } from 'react'

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
                            <li key={productId}>
                                {product.name} - ${product.price}
                            </li>
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