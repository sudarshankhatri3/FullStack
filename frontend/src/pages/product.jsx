import { useState, useEffect } from "react";
import "../app.css";
import { Link } from "react-router-dom";
import axisoInterceptor from "../services/axiosInstance";

function Product() {
  const [product, setProduct] = useState([]);
  const [cart,setCart]=useState(0)

  

  useEffect(() => {
    const products=async ()=> {
    try {
      const response = await fetch("http://127.0.0.1:8000/ecommerceApi/vendorProduct/");
      if (!response.ok) {
        const errorText = await response.text();
        console.log(errorText);
        return;
      }
      const data = await response.json();
      console.log(data)
      setProduct(data);
    } catch (error) {
      alert("Error", error);
      console.log(error);
    }
  }
  products();
  }, []);

  return (
    <>
    <h3>products list </h3>
    <div className="bg-[#F3F3F6]  min-h-screen sm:flex-nowrap p-6 grid grid-cols-4 gap-3">
        
      {product.map((prod) => (
        <div
          key={prod.id}
          className="bg-[#F3F3F6] w-full  p-6  border border-amber-500 rounded-xl shadow-sm flex flex-col  gap-4"
        >
          <img
            src={prod.img} 
            alt={prod.title}
            className="w-30 h-30 mt-3 object-cover object-top drop-shadow-[0_80px_30px_#000]"
          />
          <div className="flex items-center gap-20">
            <h3 className=" text-[#191C1D] text-[14px] font-bold">{prod.title}</h3>
            <p className="text-[#191C1D] text-[18px] font-bold">${prod.price}</p>
          </div>
          
          <p className="text-[#111111] font-light text-sm">{prod.description}</p>
        
        </div>
      ))}
    </div>
    </>
  );

}

export default Product;
