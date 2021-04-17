import React, { useEffect } from "react";
import Products from "../Products/Products";
import Error from "../Products/Error";
import Loading from "../Products/Loading";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../Actions/productActions";

export default function HomeScreen() {
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <div className="row d-flex justify-content-center">
          {products.map((product) => (
            <Products key={product._id} product={product}></Products>
          ))}
        </div>
      )}
    </div>
  );
}
