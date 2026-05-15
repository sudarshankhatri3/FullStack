import "../app.css";
import { Link } from "react-router";

export default function Headers() {
  return (
    <header className="bg-indigo-600 px-4 py-3 w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4 ">
      <div className="w-45 h-8 ">
        <h2 className="text-[#FFFFFF] w-full text-xl font-bold  ">
          SOVEREIGNMARKET
        </h2>
      </div>
        <ul className="hidden  md:flex items-center gap-5 text-white text-sm font-medium" >
          <li className="text-[#FFFFFF] font-medium text-[14px] ">
            <a href="Deals">Deals</a>
          </li>
          <li className="text-[#FFFFFF] font-medium text-[14px] ">
            <a href="Best Sellers">Best Sellers</a>
          </li>
          <li className="text-[#FFFFFF] font-medium text-[14px] ">
            <a href="Service">Service</a>
          </li>
          <li className="text-[#FFFFFF] font-medium text-[14px] ">
            <a href="New_Release">New Release</a>
          </li>
          <li className="text-[#FFFFFF] font-medium text-[14px] ">
            <a href="Gift">Gift cards</a>
          </li>
        </ul>

      
        <form class="bg-[#C7C4D8] md:w-auto flex items-center  rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 text-black outline-none w-40 md:w-64 focus:w-72 transition-all duration-300 "
          />
          <button class="bg-sky-400 px-4 py-2 text-white">🔍</button>
        </form>

      <div class="ml-8 flex  gap-3 cursor-pointer md:justify-end">
       
          <Link
            to={{pathname:"/login"}}
            className="bg-blue-300 rounded-xl h-9 w-30  flex justify-center items-center text-[20px] text-gray-900 hover:text-white font-medium transition"
          >
            Login
          </Link>

          <Link
            to={{pathname:"/signUp"}}
            className="bg-blue-300 rounded-xl h-9 w-30  flex justify-center items-center text-[20px] text-gray-900 hover:text-white font-medium transition"
          >
            Sign Up
          </Link>
      </div>
    </header>
  );
}
