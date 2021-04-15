import { Link } from "react-router-dom";
import Rating from "./Rating";
import "./Products.scss";
export default function Product(props) {
  const { product } = props;
  return (
    <div
      key={product._id}
      className="product-card col-xl-3 col-lg-4 col-8 mx-0 mx-xl-5 mx-lg-3 my-5 d-flex flex-column justify-content-center"
    >
      <Link
        className="d-flex justify-content-center"
        to={`/product/${product._id}`}
      >
        <img
          className="img-medium mt-2 my-1"
          src={product.image}
          alt={product.name}
        />
      </Link>
      <div className="product-body">
        <Link to={`/product/${product._id}`}>
          <h5>{product.name}</h5>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}
