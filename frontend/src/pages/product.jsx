import { useState, useEffect } from "react";
import "../app.css";

function Product() {
  const [product, setProduct] = useState([]);

  async function products() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        const errorText = await response.text();
        console.log(errorText);
        return;
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      alert("Error", error);
      console.log(error);
    }
  }

  useEffect(() => {
    products();
    console.log("hello sir ji");
  }, []);

  return (
    <>
    <h3>products list </h3>
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-50">
        
      {product.map((prod) => (
        <div
          key={prod.id}
          className="bg-white p-5 rounded-xl shadow-sm"
        >
          <img
            src={prod.image}
            alt={prod.title}
            className="w-full h-88 object-cover object-top drop-shadow-[0_80px_30px_#000]"
          />
          <h3 className="text-2xl py-3 text-center font-medium">{prod.title}</h3>
          <div className="m-30 flex justify-between items-center">
            <p>$<span className="text-2xl font-medium">{prod.price}</span></p>
            <button className="bg-gray-300 p-3 rounded-md text-sm hover:bg-gray-400 flex gap-3">Buy</button>
            <button className="bg-gray-300 p-3 rounded-md text-sm hover:bg-gray-400 flex gap-3">Add To Cart</button>
          </div>
        
        </div>
      ))}
    </div>
    </>
  );

}

export default Product;
