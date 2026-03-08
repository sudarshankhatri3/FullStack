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
    <div className="bg-cyan-400 min-h-screen w-full">
      <div className="bg-amber-300 rounded-xl flex flex-row justify-center flex-wrap items-center gap-20 p-10">
        {product.map((prod) => (
          <>
            <div className="w-20 h-20 p-4 ">
              <div key={prod.id} className="">
                <img src={prod.image} alt={prod.title} />
                <h3>{prod.title}</h3>
                <p>{prod.price}</p>
              </div>
              <div key={prod.id}>
                <button>Buy</button>
                <button>Add To cart</button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Product;
