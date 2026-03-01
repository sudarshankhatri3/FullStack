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
            <ul className="sideBar--list">
                <li>Home</li>
                <li>About</li>
                <li>State</li>
                <li>Hello</li>
                <li>bar</li>
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
