import React from "react";
import { useState, useEffect } from "react";
import "../app.css";

const productList = {
  title: "",
  stock: undefined,
  price: undefined,
  image: "",
  description: "",
};

export default function VendorProduct() {
  const [product, setProduct] = useState(productList);

  return (
    <div className="bg-[#c5c7d3] w-full min-h-screen">
      <div className=" mt-10 pl-30 bgflex  flex-col justify-start items-center gap-30">
        <h3 className="text-[#1A1B22] text-2xl font-extrabold ">Welcome, Future Top Seller 🔥</h3>
        <p className="text-[#454652] font-medium text-xl">Add your products and conquer the online market.</p>
      </div>
      <form action="">
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            value={product.stock}
            onChange={(e) => setProduct({ ...product, stock: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="stock">Image</label>
          <input
            type="file"
            value={product.image}
            onChange={(e) => setProduct({ ...product, image: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="stock">Description</label>
          <textarea
            type="text"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
   
  );
}
