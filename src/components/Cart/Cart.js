import React, { useEffect } from 'react'

const Cart = ({ cartItems }) => {
    // const [cartItems, setCartItems] = useState([])
    // useEffect(() => {
    //   setCartItems(cart)
    // //   console.log(cartItems)
    // }, [])
    useEffect(() => {
        console.log(cartItems);
      }, [cartItems]); 
    return (
        <div className='cart'>
            {cartItems.length > 0 && (
                <>
                    <h2>Cart</h2>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>{item.name} - ${item.price}</li>
                        ))}
                    </ul>
                </>
            )}
            {cartItems.length === 0 && <p>Your cart is empty.</p>}
        </div>
    //     <div>
    //   {Object.entries(cartItems).length > 0 && ( // Check if cart is not empty
    //     <>
    //       <h2>Cart</h2>
    //       <ul>
    //         {Object.entries(cartItems).map(([productId, { name, price, quantity }]) => (
    //           <li key={productId}>
    //             {quantity}x {name} -  ${price?.toFixed(2) || 'Price unavailable'}
    //           </li>
    //         ))}
    //       </ul>
    //     </>
    //   )}
    //   {Object.entries(cartItems).length === 0 && <p>Your cart is empty.</p>}
    // </div>
    )
}

export default Cart