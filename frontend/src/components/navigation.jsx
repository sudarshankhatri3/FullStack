import "../styles/componentCss/navigation.css";
import ListCategory from "./listCategory";

export default function Header() {
  return (
    <>
      <div className="navbar">
        <div className="navbar__brand">
          <img
            className="navbar__brand-logo"
            src="/logo.png"
            alt="logo image"
          />
        </div>
        <div className="navbar__search">
          <form className="navbar__search-form">
            <div className="navbar__search-box">
              <input
                type="text"
                className="navbar__search-input"
                placeholder="Search..."
              />
              <button className="navbar__search-btn" type="submit">
                All Categories
              </button>
            </div>
          </form>
          <div>
            <h3>Welcome To swat BabyMall</h3>
          </div>
        </div>
        <div>
           <ListCategory/>
        </div>
      </div>
    </>
  );
}
