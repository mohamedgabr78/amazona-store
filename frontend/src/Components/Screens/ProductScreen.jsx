import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../../Actions/productActions";
import Error from "../Products/Error";
import Loading from "../Products/Loading";
import Rating from "../Products/Rating";
import "./Product.scss";

export default function ProductScreen(props) {
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const dispatch = useDispatch();
  const productId = props.match.params.id;

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <div className="single-product">
          <i className="arrow fas fa-arrow-left"></i>
          <Link to="/">Back to result</Link>
          <div className="single-product-card row d-flex justify-content-center">
            <div className="col-8 col-md-4">
              <img
                className="large"
                src={product.image}
                alt={product.name}
              ></img>
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
                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div className="col-6">Qty</div>
                          <div className="col-3">
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={addToCartHandler}
                          className="add-btn mt-3"
                        >
                          Add to Cart
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
