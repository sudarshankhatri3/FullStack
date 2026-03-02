import { useState } from "react";
import "../styles/componentCss/category.css";

export default function ListCategory() {
  const [active, setActive] = useState(false);
  return (
    <>
      <div class="category-header">
        <div
          class={`category-header__menu ${active ? "active" : ""}`}
          onClick={() => setActive(!active)}
        >
          <span class="category-header__menu-line"></span>
          <span class="category-header__menu-line"></span>
          <span class="category-header__menu-line"></span>
        </div>

        <div class="category-header__title-wrapper">
          <h2 class="category-header__title">List Category</h2>
        </div>

        {/* side bar effect */}
        <div className={`sidebar ${active ? "sidebar--open" : ""}`}>
          <h3 className="sidebar__title">SALE 40% OFF</h3>

          <ul className="sidebar__list">
            <li className="sidebar__item">
              <a className="sidebar__link" href="#">
                Pregnant & Postpartum
              </a>
            </li>
            <li className="sidebar__item">
              <a className="sidebar__link" href="#">
                Milks & Foods
              </a>
            </li>
            <li className="sidebar__item">
              <a className="sidebar__link" href="#">
                Diapers & Wipes
              </a>
            </li>
            <li className="sidebar__item">
              <a className="sidebar__link" href="#">
                Infant
              </a>
            </li>
            <li className="sidebar__item">
              <a className="sidebar__link" href="#">
                Eat & Drink Supplies
              </a>
            </li>
            <li className="sidebar__item">
              <a className="sidebar__link" href="#">
                Baby Fashion
              </a>
            </li>
            <li className="sidebar__item">
              <a className="sidebar__link" href="#">
                Baby Out
              </a>
            </li>
            <li className="sidebar__item">
              <a className="sidebar__link" href="#">
                Toys & Study
              </a>
            </li>
            <li className="sidebar__item">
              <a className="sidebar__link" href="#">
                Stroller, Crib, Chair
              </a>
            </li>
            <li className="sidebar__item">
              <a className="sidebar__link" href="#">
                Washes & Bath
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar">
          <ul className="navbar__list">
            <li className="navbar__item">Home</li>
            <li className="navbar__item">Pages</li>
            <li className="navbar__item">Product</li>
          </ul>
        </div>
      </div>
    </>
  );
}
