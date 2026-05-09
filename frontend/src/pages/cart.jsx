import React from "react";
import { useState,useEffect } from "react";

export  default function Cart(){
    const [cart,setCarts]=useState([])

    useEffect(()=>{
        const carts=async ()=>{
            try {
                const response=await fetch("http://127.0.0.1:8000/ecommerceApi/cartProduct/")
                if(!response.ok){
                    const error=await response.text()
                    console.log(error)
                }
                const data=await response.json()
                setCarts(data)
            } catch (error) {
                console.log(error)
            }
        }
        carts()
    })


    return (
        <div className="bg-[#F3F3F6]  min-h-screen sm:flex-nowrap p-6 grid grid-cols-4 gap-3">
        
      {cart.length>0 ?cart.map((prod) => (
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
      )):
      <p>Items not added to cart yet</p>
      }
    </div>


    )
}