import { useEffect } from "react";
import { addToCart } from "../../Actions/cartActions";
import { useDispatch } from "react-redux";

function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART : productId:{productId} Qty : {qty}
      </p>
    </div>
  );
}

export default CartScreen;