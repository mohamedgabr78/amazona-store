import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Products/Rating";
import data from "../../data";
import "./Product.scss";

export default function ProductScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product) {
    return <div> Product Not Found</div>;
  }
  return (
    <div className="single-product">
      <i className="arrow fas fa-arrow-left"></i>
      <Link to="/">Back to result</Link>
      <div className="single-product-card row d-flex justify-content-center">
        <div className="col-8 col-md-4">
          <img className="large" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-lg-3 col-12 d-flex justify-content-center align-items-center">
          <ul className="row">
            <li className="col-12">
              <h3>{product.name}</h3>
            </li>
            <li>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </li>
            <li>Pirce : ${product.price}</li>
            <div className="row">
              <li className="col-4">Description:</li>
              <p className="col-12">{product.description}</p>
            </div>
          </ul>
        </div>
        <div className="col-lg-3 col-12 d-flex align-items-center">
          <div className="card-body col-12">
            <ul>
              <li>
                <div className="row">
                  <div className="col-6">Price</div>
                  <div className="price col-6">${product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div className="col-6">Status</div>
                  <div className="col-6">
                    {product.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="error">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="add-btn mt-3">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
