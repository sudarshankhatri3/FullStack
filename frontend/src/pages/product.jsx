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
    <div className="grid grid-cols-4 gap-5 p-5">
      {product.map((prod) => (
        <div
          key={prod.id}
          className="bg-neutral-primary-soft min-h-full  flex flex-col p-4 border border-default rounded-base shadow-xs"
        >
          <img
            src={prod.image}
            alt={prod.title}
            className="w-full h-48 object-cover rounded-sm"
          />
          <h3 className="font-bold mt-3">{prod.title}</h3>
          <p className="text-sm text-gray-500">Price: {prod.price}</p>
          <div className="flex gap-2 mt-auto pt-3">
            <button className="bg-blue-400 text-white px-4 py-2 rounded">
              Buy
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded">
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
