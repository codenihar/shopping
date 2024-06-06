import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productsData } from "./ProductData";
import "./Products.css";

const Product = () => {
  const { productId } = useParams();
  // const { productName, productImage, productPrice } = props;
  // const {fetchedDetails} = props
  const [productDetails, setProductDetails] = useState([]);

  // const getProductDetailsById = (productId) => {
  //   const clickProduct = productsData.find((item) => item.id === parseInt(productId));
  //   return clickProduct ? { name: clickProduct.name, price: clickProduct.price } : null;
  // };
  // console.log(getProductDetailsById)
  // console.log(productName, productPrice)
  useEffect(() => {
    const clickProduct = productsData.find(
      (item) => item.id === parseInt(productId)
    );
    console.log("Component mounted or updated with productId:", productId);
    setProductDetails(clickProduct);
  }, [productId]);
  // console.log(productDetails)
  return (
    // <div>
    //     <h2>{fetchedDetails.name}</h2>
    //     <p>Price {fetchedDetails.price}</p>
    // </div>
    // <div>
    //     <h2>{productDetails.name}</h2>
    //     <img src={productDetails.image} alt={productDetails.name} />
    //     <p>Product {productId}</p>
    //     <p>Price {productDetails.price} </p>
    // </div>
    <div className="container productbg row">
      <div className="card">
        <img
          src={productDetails.image}
          className="card-img-top"
          alt={productDetails.name}
        />
        <div className="card-body">
          <h5 className="card-title">{productDetails.name}</h5>
          <p className="card-text">{productDetails.price}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
          <Link to="/" className="card-link button">
            Card link
          </Link>
          <Link to="/" className="card-link ">
            Another link
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
