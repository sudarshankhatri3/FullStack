import "../styles/componentCss/headerTemplate.css";
import Login from "./loginButton";
import { SignUp } from "./loginButton";

export default function HeaderTemplate() {
  return (
    <>
      <div className="promo-container">
        <div className="promo-header">
          <h2 className="promo-header__title">Convertible Cribs</h2>
          <p className="promo-header__subtitle">Otto 3-in-1 Full-Size</p>
        </div>

        <div className="promo-banner">
          <div className="promo-banner__discount">
            <h3 className="promo-banner__discount-rate">10%</h3>
            <p className="promo-banner__discount-text">
              SALE <br />
              OFF
            </p>
          </div>

          <div className="promo-banner__code">
            <p className="promo-banner__code-label">Enter promotion code</p>
            <h3 className="promo-banner__code-value">SWAT10OFF</h3>
          </div>
         </div>

          <div className="promo-banner__image">
            <img src="/topNav.png" alt="Promotion" />
          </div>
          <div className="promo-auth">
            <Login/>
            <SignUp/>
          </div>
       
      </div>
    </>
  );
}
