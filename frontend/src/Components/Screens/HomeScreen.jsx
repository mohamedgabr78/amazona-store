import React from "react";
import Products from "../Products/Products";
import data from "../../data";

export default function HomeScreen() {
  return (
    <div>
      <div className="row d-flex justify-content-center">
        {data.products.map((product) => (
          <Products key={product._id} product={product}></Products>
        ))}
      </div>
    </div>
  );
}
