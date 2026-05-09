import React from "react";
import { useState, useEffect } from "react";
import Profile from "../components/profile";

export default function Cart() {
  const [cart, setCarts] = useState([]);
  const cartHandler=async(userId)=>{
    try {
        const response=await fetch(`http://127.0.0.1:8000/ecommerceApi/cartProduct/${userId}/`,{
            method:"DELETE"
        })
        if(!response.ok){
            const error=await response.text()
            alert(error)
            return
        }
        console.log(response.ok)
        
    } catch (error) {
        console.log(error)
        alert(error)
        
    }
  }

  useEffect(() => {
    const carts = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/ecommerceApi/cartProduct/",
        );
        if (!response.ok) {
          const error = await response.text();
          console.log(error);
        }
        const data = await response.json();
        setCarts(data);
      } catch (error) {
        console.log(error);
      }
    };
    carts();
  }, []);

  return (
    <>
     <Profile/>
   
    <div className="bg-[#FBF9FA] min-h-screen p-4 sm:p-6">
      <div className="flex flex-col lg:flex-row gap-6  ">
        <div className="flex-1 flex flex-col gap-5 ">
            <h1 className="text-xl font-bold">Shopping Cart</h1>
            {cart.length > 0 ? (
            cart.map((prod) => (
            <div  className="bg-white w-full p-4 sm:p-6 border border-[#f7afaf] rounded-xl shadow-sm flex flex-col sm:flex-row gap-4">
              <div
                key={prod.id}
                className=""
              >
                <img
                  src={prod.product.image}
                  alt={prod.title}
                  className="w-full sm:w-32 h-32 object-cover rounded-xl"
                />
                </div>
                <div className="flex flex-col justify-between w-full">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold">
                  Qty: {prod.quantity}
                </h3>
                <p className="text-lg font-bold">
                  ${prod.total_price}
                </p>
              </div>
            <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">Product description here</p>
              <button className="hover:scale-110 transition-transform duration-150" aria-label="Remove product" onClick={()=>cartHandler(prod.id)}>
                <img src="./Button.png" alt="remove" className="w-6 h-6" />
              </button>
            </div>
             
            </div>
          </div>
          ))
        ) : (
          <p>Items not added to cart yet</p>
        )}
        </div>
        
        <div className="w-full lg:w-[350px] bg-white p-4 sm:p-6 border border-[#C4C6CD] rounded-2xl flex flex-col gap-4">
      <h3 className="text-lg sm:text-xl font-semibold">
        Cart Summary
      </h3>

      <div className="p-2 border-b border-[#C4C6CD]">
        <div className="flex justify-between">
          <h3 className="text-gray-600">Subtotal</h3>
          <p>$907</p>
        </div>

        <div className="flex justify-between">
          <h3>Estimated Tax</h3>
          <p>$723</p>
        </div>
      </div>

      <div className="flex justify-between font-bold">
        <h3>Total</h3>
        <p>$34545</p>
      </div>

      {/* INFO BOX */}
      <div className="bg-[#EFEDEF] p-3 flex items-start gap-3 rounded-lg">
        <img src="../astrik.png" alt="" className="w-5 h-5 mt-1" />
        <p className="text-sm text-gray-600">
          Nexus Buyer Protection applies to this order. Your transaction is secure.
        </p>
      </div>
    </div>
    </div>
    </div>
    </>
  );
}
