import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.scss";
function Header() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <div className="header-container row d-flex justify-content-between">
      <div className="brand col-2">
        <Link to="/">amazona</Link>
      </div>
      <div className="routes col-6 d-flex justify-content-end">
        <Link to="/cart">Cart</Link>
        {cartItems.length > 0 && (
          <span className="cart-length">{cartItems.length}</span>
        )}

        <Link to="/signin">Sign In</Link>
      </div>
    </div>
  );
}

export default Header;
