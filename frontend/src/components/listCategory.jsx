import { useState } from "react";
import "../styles/componentCss/category.css";


export default function ListCategory() {
  const [active,setActive] = useState(false);
  return (
    <>
      <div class="category-header">
        <div class={`category-header__menu ${active ? "active":""}`}  onClick={()=>setActive(!active)}>
          <span class="category-header__menu-line"></span>
          <span class="category-header__menu-line"></span>
          <span class="category-header__menu-line"></span>
        </div>

        <div class="category-header__title-wrapper">
          <h2 class="category-header__title">List Category</h2>
        </div>

        {/* side bar effect */}
        <div className={`sidebar ${active?"sidebar--open":""}`}>
            <h3>SALE 40% OFF</h3>
            <ul className="sideBar--list">
                <li><a href="#">Pregnant & Postpartum</a></li>
                <li><a href="#">Milks & Foods</a></li>
                <li><a href="#">Diapers & Wipes</a></li>
                <li><a href="#">Infant</a></li>
                <li><a href="#">Eat & Drink Supplies</a></li>
                <li><a href="#">Baby Fashion</a></li>
                <li><a href="#">Baby Out</a></li>
                <li><a href="#">Toys & Study</a></li>
                <li><a href="#">Stroller, Crib, Chair</a></li>
                <li><a href="#">Washes & Bath</a></li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Home</li>
                <li>Pages</li>
                <li>Product</li>
            </ul>
        </div>
      </div>
    </>
  );
}
