import { useEffect } from "react";
import { addToCart, removeFromCart } from "../../Actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Product.scss";
import useRenderTranslationLabel from "../../translations/useRenderTranslationLabels";
function CartScreen(props) {
  const translationLabels = useRenderTranslationLabel();
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };
  return (
    <div className="row cart-container d-flex justify-content-between">
      <div className="col-6">
        <h1>{translationLabels.renderLabel("shopping_cart")}</h1>
        {cartItems.length === 0 ? (
          <span>
            {translationLabels.renderLabel("cart_is_empty")}
            <Link to="/">{translationLabels.renderLabel("go_shopping")}</Link>
          </span>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <div className="row d-flex flex-row mt-5">
                <li key={item.product} className="row d-flex flex-row mb-5">
                  <img src={item.image} alt={item.name} className="col-3"></img>

                  <div className="col-3 mt-5">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div className="col-2 mt-5">
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-2 mt-5">${item.price}</div>
                  <div className="col-2 mt-5">
                    <button
                      className=""
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      {translationLabels.renderLabel("delete")}
                    </button>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        )}
      </div>
      <div className="col-4">
        <div className="row total">
          <ul>
            <li>
              <h2>
                {translationLabels.renderLabel("subtotal")} (
                {cartItems.reduce((a, c) => a + c.qty, 0)}{" "}
                {translationLabels.renderLabel("item")}) : $
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cartItems.length === 0}
              >
                {translationLabels.renderLabel("proceed_to_checkout")}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default CartScreen;
