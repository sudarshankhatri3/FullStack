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
    <div className="bg-[#F4F2FC] w-full min-h-screen">
      <div className="mt-10 px-6 sm:px-10 lg:px-30 flex flex-col gap-3">
        <h3 className="text-[#1A1B22] text-xl sm:text-2xl font-extrabold">
          Welcome, Future Top Seller 🔥
        </h3>
        <p className="text-[#454652] font-medium text-base sm:text-xl">
          Add your products and conquer the online market.
        </p>
      </div>
      <form
        action=""
        className="flex flex-col lg:grid lg:grid-cols-[60%_1fr] gap-6 lg:gap-10 px-6 sm:px-10 lg:pl-10 lg:pr-6 pb-16"
      >
        <div className="pl-10 w-full">
          <div className="mt-12 p-8 sm:p-8 bg-[#b9bec9]  w-full  flex flex-col gap-5 item border border-amber-300 rounded-2xl">
            <div className="mt-3 flex items-center gap-4">
              <img
                src="./productForm.png"
                alt="product image"
                className=" h-4 w-4 object-cover"
              />
              <h3 className="text-[#1A1B22] text-2xl font-bold">
                Product Identity
              </h3>
            </div>
            <div className="mt-3 flex  items-center flex-wrap gap-6">
              <div className=" flex flex-col gap-1 flex-1 min-w-[180px]">
                <label
                  htmlFor="title"
                  className=" text-[#454652]  text-[12px] font-semibold tracking-wide "
                >
                  PRODUCT TITLE
                </label>
                <input
                  type="text"
                  value={product.title}
                  onChange={(e) =>
                    setProduct({ ...product, title: e.target.value })
                  }
                  placeholder="e.g. Handcrafted Mahogany Desk Organiser"
                  className="p-4 h-11 w-full bg-[#FFFFFF]   rounded-xl  placeholder:text-gray-500 placeholder:text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col justify-start items-center">
                <label
                  htmlFor="category"
                  className="text-[#454652] text-[12px] font-semibold "
                >
                  CATEGORY
                </label>
                <input
                  type="text"
                  className="p-4 h-11 w-full bg-[#FFFFFF]  rounded-xl   placeholder:text-gray-500 placeholder:text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  placeholder="Select a category"
                />
              </div>
            </div>
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
            <label htmlFor="stock">Image</label>
            <input
              type="file"
              value={product.image}
              onChange={(e) =>
                setProduct({ ...product, image: e.target.value })
              }
            />
          </div>
        </div>
        <div>
          <div className="ml-20 mt-12 p-8 sm:p-8 bg-[#b9bec9]  w-80  flex flex-col gap-5  border border-amber-300 rounded-2xl ">
            <div className=" flex   justify-start items-center gap-3">
              <img
                src="./finance.png"
                alt="finance"
                className="h-4 w-4 object-cover"
              />
              <h3 className="text-[#1A1B22] font-bold text-2xl  ">
                Financials
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="stock"
                className="font-semibold text-[12px] text-[#454652] tracking-wide"
              >
                STOCK QUANTITY
              </label>
              <input
                type="number"
                value={product.stock}
                onChange={(e) =>
                  setProduct({ ...product, stock: e.target.value })
                }
                placeholder="0"
                className="p-4 h-11 w-full bg-[#FFFFFF]  rounded-xl   placeholder:text-gray-500 placeholder:text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                type="number"
                value={product.price}
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
                placeholder="$0.00"
                className="p-4 h-11 w-full bg-[#FFFFFF]  rounded-xl   placeholder:text-gray-500 placeholder:text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <div className="ml-20 mt-10 p-8 sm:p-8 bg-[#b9bec9]  w-80  flex flex-col gap-5  border border-amber-300 rounded-2xl  ">
              <div className="flex flex-col gap-4 ">
                <h3 className="text-[#454652] font-bold text-[14px]">CURRENT STATUS</h3>
                <input type="text" placeholder=". Drafting Mode"  className="p-4 h-11 w-full bg-[#FFFFFF]  rounded-xl   placeholder:text-gray-500 placeholder:text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"/>
                <p className="text-[#454652] text-[12px]">
                  Your product is currently hidden from the marketplace.
                  Complete all required fields to publish.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="ml-20 mt-10 p-8 sm:p-8 bg-[#b9bec9]  w-80  flex flex-col gap-5  border border-amber-300 rounded-2xl">
                <div className=" bg-[#24389C] w-full h-16 text-[#FFFFFF] font-bold text-xl flex justify-center items-center gap-5 rounded-xl">
                    <img src="./pubProd.png" alt="publish product" />
                    <button>Publish Product</button>
                </div>
                <div className=" bg-[#E9E7F0] w-full h-16 text-[#FFFFFF] font-bold text-xl flex justify-center items-center gap-5 rounded-xl">
                    <img src="./draft.png" alt="draft product" />
                    <button className="text-[#24389C]">Save as Draft</button>
                </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
