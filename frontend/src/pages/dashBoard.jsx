import "../app.css";
import React from "react";

const asideBar = [
  {
    photo: "./dashboard.png",
    link: "Dashboard",
  },
  {
    photo: "./product.png",
    link: "Product",
  },
  {
    photo: "./orders.png",
    link: "Orders",
  },
  {
    photo: "./customer.png",
    link: "Customers",
  },
  {
    photo: "./setting.png",
    link: "Setting",
  },
];

export default function DashBoard() {
  return (
    <div className='flex'>

      {/* side bar */}
      <aside className="h-[500px]  w-60  bg-[#EEF2FF] flex flex-col  items-center  gap-10 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
        <div className="h-25 w-50 flex flex-col justify-center items-center gap-3">
          <h3 className=" text-[24px] font-semibold text-blue-500 block-auto">
            Sovereign Store
          </h3>
          <p className="text-[#64748B] text-[12px]">Premium Curator</p>
        </div>
        <div className="flex flex-col gap-3 w-full">
          {asideBar.map((prod,index) => (
            <div  key={index} className="pl-20 flex items-center gap-3 w-full">
              <img src={prod.photo} alt={prod.link} className="w-3 h-3 object-cover" />
              <a
                href={prod.link}
                className="text-[14px] text-blue-600 text-pretty"
              >
                {prod.link}
              </a>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
