import React from "react";
import { useState, useEffect } from "react";

export default function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#C4C6CD] px-4 sm:px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        
        <h1 className="text-[#041627] font-bold text-lg sm:text-xl">
          MarketPlace
        </h1>

        <div className="hidden md:flex items-center gap-6">
          <h3 className="nav-link">Shop</h3>
          <h3 className="nav-link">Categories</h3>
          <h3 className="nav-link">Deals</h3>
          <h3 className="nav-link">Help</h3>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <img
              src="/banner1.png"
              alt="profile"
              className="w-9 h-9 rounded-full object-cover"
            />
            <span className="text-sm font-medium">Sudarshan</span>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 mt-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 bg-white p-4 rounded-xl shadow-md">
          
          <h3 className="nav-link">Shop</h3>
          <h3 className="nav-link">Categories</h3>
          <h3 className="nav-link">Deals</h3>
          <h3 className="nav-link">Help</h3>
          <div className="flex items-center gap-2 mt-2">
            <img
              src="/banner1.png"
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm">Sudarshan</span>
          </div>
        </div>
      </div>
    </div>
  );
}
