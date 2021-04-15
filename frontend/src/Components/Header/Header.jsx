import { Link } from "react-router-dom";
import "./Header.scss";
function Header() {
  return (
    <div className="header-container row d-flex justify-content-between">
      <div className="brand col-2">
        <Link to="/">amazona</Link>
      </div>
      <div className="routes col-6 d-flex justify-content-end">
        <Link to="/cart">Cart</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </div>
  );
}

export default Header;
