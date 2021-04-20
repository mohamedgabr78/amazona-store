import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAppLanguageContext } from "../../context";
import useRenderTranslationLabel from "../../translations/useRenderTranslationLabels";
import "./Header.scss";

function Header() {
  const { appLanguage, setAppLanguage } = useAppLanguageContext();
  const translationLabels = useRenderTranslationLabel();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <div className="header-container row d-flex justify-content-between">
      <div className="brand col-2">
        <Link to="/">amazona</Link>
      </div>
      <div className="routes col-6 d-flex justify-content-end">
        <Link to="/cart">{translationLabels.renderLabel("cart")}</Link>
        {cartItems.length > 0 && (
          <span className="cart-length">{cartItems.length}</span>
        )}

        <Link to="/signin">{translationLabels.renderLabel("signin")}</Link>
        <div
          className="change-lang col-2 mt-2"
          onClick={() => {
            if (appLanguage === 1) {
              setAppLanguage(2);
            } else {
              setAppLanguage(1);
            }
          }}
        >
          <div>{translationLabels.renderLabel("lang")}</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
