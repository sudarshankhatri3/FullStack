import React from "react";
import { useState,useEffect } from "react";


const productList={
    title:"",
    stock:undefined,
    price:undefined,
    image:"",
    description:""
}

export default function VendorProduct(){
    const [product,setProduct]=useState(productList)




    return (
        <> 
          <form action="">
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" value={product.title} onChange={(e)=>setProduct({...productList,title:e.target.value})} />
                {product}
            </div>
            <div>
                <label htmlFor="stock">Stock</label>
                <input type="number" value={product.stock} onChange={(e)=>setProduct({...productList,stock:e.target.value})}/>
                {product}
            </div>
             <div>
                <label htmlFor="price">Stock</label>
                <input type="number" value={product.price} onChange={(e)=>setProduct({...productList,price:e.target.value})}/>
                {product}
            </div>
             <div>
                <label htmlFor="stock">Image</label>
                <input type="image" value={product.image} onChange={(e)=>setProduct({...productList,image:e.target.value})}/>
                {product}
            </div>
             <div>
                <label htmlFor="stock">Description</label>
                <textarea type="text" value={product.description} onChange={(e)=>setProduct({...productList,description:e.target.value})}/>
                {product}
            </div>
          </form>
        </>
    )
}