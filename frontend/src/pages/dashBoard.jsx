import "../app.css";
import React from "react";
import { useContext } from "react";
import Charts from "../components/chart";

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

const revenuDashboard = [
  {
    title: "TOTAL REVENUE",
    photo: "./revenu.png",
    revenu: "$124500",
    incRate: 12,
  },
  {
    title: "TOTAL ORDERS",
    photo: "./Overlay.png",
    revenu: "12.40",
    incRate: 8,
  },
  {
    title: "CONVERSION RATE",
    photo: "./conversion.png",
    revenu: "3.4%",
    incRate: 2,
  },
  {
    title: "ACTIVE CUSTOMERS",
    photo: "./customerGroup.png",
    revenu: "8,430",
    incRate: 15,
  },
];

const topProduct = [
  {
    image: "./clock.png",
    title: "Sovereign classic watch",
    category: "Accessories",
    price: 42300,
    sales: 142,
  },
  {
    image: "./shoe.png",
    title: "Velocity Run-max",
    category: "Footwear",
    price: 29550,
    sales: 210,
  },
  {
    image: "./headphone.png",
    title: "Aura wireless Audio",
    category: "Electronics",
    price: 38120,
    sales: 142,
  },
];

export default function DashBoard() {
  return (
    <div className="flex ">
      {/* side bar */}
      <aside className="min-h-[500px]  w-60  bg-[#EEF2FF] flex flex-col  items-center  gap-10 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
        <div className="h-25 w-50 flex flex-col justify-center items-center gap-3">
          <h3 className=" text-[24px] font-semibold text-blue-500 block-auto">
            Sovereign Store
          </h3>
          <p className="text-[#64748B] text-[12px]">Premium Curator</p>
        </div>
        <div className="flex flex-col gap-3  p-6 w-full">
          {asideBar.map((prod, index) => (
            <div key={index} className="flex  items-center gap-3 w-full">
              <img
                src={prod.photo}
                alt={prod.link}
                className="w-3 h-3 object-cover"
              />
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

      {/* main menu */}
      <div className="flex justify-end items-center">
        <img src="./notification.png" alt="notification" />
        <img src="./button.png" alt="support" />
        <button>Support </button>
      </div>
      <div className="h-full min-h-full mt-20 pl-10 flex  flex-col gap-20">
        <div className="mt-20 ">
          <h2 className="text-4xl text-[#191C1D]">Welcome Back, Cuartor</h2>
          <p className="text-[#464555] sm:text-xl ">
            Here’s what’s happening with the Sovereign Store ecosystem today.
          </p>
        </div>

        {/* for revenu conversion and customer */}
        <div className="w-250 min-h-[200px]  bg-white-200 grid grid-cols-4 gap-10">
          {revenuDashboard.map((dash) => (
            <div className="h-full border-l-3 border-[#58579B]  flex flex-col gap-5">
              <div className="border-l-amber-800 flex flex-row gap-5">
                <h4 className="text-[#464555] text-[12px] font-bold">
                  {dash.title}
                </h4>
                <img src={dash.photo} alt="revenue photo" />
              </div>
              <div className="flex flex-row gap-5">
                <p className="text-black font-bold text-3xl">{dash.revenu}</p>
                <p>{dash.incRate}</p>
              </div>
            </div>
          ))}
        </div>

        {/* section for top product */}
        <div className="flex gap-30 ">
          <div>
            <h3 className="text-[#191C1D] font-bold text-2xl antialiased line-clamp-1">Sales Over Time</h3>
            <p className="text-[#464555] h-10 w-60 font-light text-[14px] line-clamp-2">Transaction volume for the last 30 days</p>
            <Charts  />
          </div>
          <div className="bg-[#c6c6ce]  min-h-[400px] self-center p-8 rounded-2xl flex flex-col justify-end items-center gap-15">
            <h2 className="text-3xl text-[#191C1D] ">TOP PRODUCTS</h2>
            {topProduct.map((prod) => (
              <div className=" w-full p-30 flex items-center gap-10">
                <img src={prod.image} alt={prod.title} />
                <div>
                  <h3 className=" h-14 w-22 text-[#191C1D] text-[14px] font-bold ">
                    {prod.title}
                  </h3>
                  <p className="h-4 w-20 text-[12px] text-[#464555] ">
                    {prod.category}
                  </p>
                </div>
                <div>
                  <p className="text-[#3525CD] text-xl font-bold">
                    ${prod.price}
                  </p>
                  <p className="text-[#464555] text-[10px] ">
                    {prod.sales} sales
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
