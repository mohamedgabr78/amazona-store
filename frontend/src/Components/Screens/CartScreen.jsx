import { useEffect } from "react";
import { addToCart } from "../../Actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Product.scss";
function CartScreen(props) {
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
    // delete action
  };

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };
  return (
    <div className="row cart-container d-flex justify-content-between">
      <div className="col-8">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <span>
            Cart is empty<Link to="/">Go Shopping</Link>
          </span>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <div className="row d-flex flex-row">
                <li key={item.product} className="row d-flex flex-row mb-5">
                  <img src={item.image} alt={item.name} className="col-3"></img>

                  <div className="col-2">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div className="col-2">
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
                  <div className="col-2">${item.price}</div>
                  <div className="col-2">
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        )}
      </div>
      <div className="col-4">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
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
                Proceed to Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default CartScreen;
