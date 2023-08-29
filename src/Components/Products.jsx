import React, { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";

const Products = () => {
  const [products, setProducts] = useState([]);

  const apiUrl = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((responseData) => setProducts(responseData));
  }, []);

  return (
    <>
      <h2 className="text-center p-4 -display-3 text-light">Our Products</h2>
      <div className="container">
        <div className="row gy-2 gx-2">
          {products.map((product) => {
            return (
              <div key={product.id} className="col-sm-12 col-md-6 col-lg-3">
                <ProductDetails productData={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
