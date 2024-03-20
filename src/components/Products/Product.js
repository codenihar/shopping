import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'


const Product = (props) => {
    const {productId} = useParams()

    useEffect(() => {
      console.log("Hello 1")
    
      return () => {
        console.log("Hello 2")
      }
    }, [productId])
    
    const {productName} = props
    return (
        <div>Product {productName}</div>
    )
}

export default Product