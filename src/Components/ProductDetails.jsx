import React from "react";
import "./ProductDetails.css";

const ProductDetails = (props) => {
  const { productData } = props;
  return (
    <>
      <div className="card">
        <img
          src={productData.image}
          className="card-img-top"
          alt="product full details"
        />
        <div className="card-body">
          <h5 className="card-title h6">{productData.title.slice(0,66)}</h5>
          <p className="card-text overflow-hidden">{productData.description.slice(0,100)}</p>
          <div className="rating d-flex justify-content-around p-1 m-1">
            <small className="text-danger fw-bold">
              Price: {productData.price} $
            </small>
            <small className="fw-bold">Count: {productData.rating.count}</small>
            <small className="text-warning fw-bold">
              Rating: {productData.rating.rate}*
            </small>
          </div>
          <button href="#" className="btn btn-outline-info">
            View Details
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

/*{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
} */
