import React from "react";
import { useState, useEffect } from "react";

export default function Profile() {

  return (
    <div className="bg-[#C4C6CD] p-6  flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Left Section */}
      <div className="flex flex-wrap items-center justify-center sm:justify-start sm:flex-nowrap gap-4">
        <h1 className="text-[#041627] font-bold text-lg sm:text-xl">
          MarketPlace
        </h1>
        <h3 className="text-[#44474C] text-sm sm:text-base">Shop</h3>
        <h3 className="text-[#44474C] text-sm sm:text-base">Categories</h3>
        <h3 className="text-[#44474C] text-sm sm:text-base">Deals</h3>
        <h3 className="text-[#44474C] text-sm sm:text-base">Help</h3>
      </div>

      {/* Right Section */}
      <div className="flex justify-center sm:justify-end">
        <div className="w-10 h-10 border rounded-full overflow-hidden">
          <img
            src="/banner1.png"
            alt="profile"
            className="w-full h-full object-cover"
          />
          <p>name</p>
        </div>
      </div>
    </div>
  );
}
