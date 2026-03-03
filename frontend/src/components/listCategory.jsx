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

        <div className="header__navbar">
          <ul className="header__nav-list">
            <li className="header__nav-item"><a href="#home">Home</a></li>
            <li className="header__nav-item"><a href="page">Pages</a></li>
            <li className="header__nav-item"><a href="product">Product</a></li>
          </ul>
        </div>
      </div>
      <div>
        {/* side bar effect */}
        <div className={`sidebar ${active ? "sidebar--open" : ""}`}>
          <h3 className="">SALE 40% OFF</h3>

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
      </div>
    </>
  );
}
