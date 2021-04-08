import React from "react";
import "./Header.scss";
function Header() {
  return (
    <div className="header-container row d-flex justify-content-between">
      <div className="brand col-2">
        <a href="/">amazona</a>
      </div>
      <div className="routes col-6 d-flex justify-content-end">
        <a href="/cart">Cart</a>
        <a href="/signin">Sign In</a>
      </div>
    </div>
  );
}

export default Header;
