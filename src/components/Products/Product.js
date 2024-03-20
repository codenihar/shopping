import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'


const Product = (props) => {
    const {productId} = useParams()
    // const { productName, productImage, productPrice } = props;
    const {fetchedDetails} = props
    
    // console.log(productName, productPrice)
    useEffect(() => {
        console.log("Component mounted or updated with productId:", productId);
      return () => {
        console.log("Component unmounted or updated with new productId:", productId);
      }
    }, [productId])
    
    return (
        // <div>
        //     <h2>{fetchedDetails.name}</h2>
        //     <p>Price {fetchedDetails.price}</p>
        // </div>
        <div>
            <h2>{fetchedDetails.name}</h2>
            <img src={fetchedDetails.image} alt={fetchedDetails.name} />
            <p>Product {productId}</p>
            <p>Price {fetchedDetails.price} </p>
        </div>
    )
}

export default Product