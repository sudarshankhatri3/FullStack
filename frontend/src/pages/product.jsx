import { useState, useEffect } from "react";
import "../app.css";

function Product() {
  const [product, setProduct] = useState([]);
  const [cart,setCart]=useState(0)

  async function products() {
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
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
    <div className="bg-[#F3F3F6] min-h-screen mt-5 p-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-50">
        
      {product.map((prod) => (
        <div
          key={prod.id}
          className="bg-[#F3F3F6] w-90  h-96  border-b-blue-600 rounded-xl shadow-sm flex flex-col items-center gap-4"
        >
          <img
            src={prod.image}
            alt={prod.title}
            className="w-30 h-30 mt-3 object-cover object-top drop-shadow-[0_80px_30px_#000]"
          />
          <h3 className="text-[10px] py-3 text-center font-medium">{prod.title}</h3>
          <div className=" flex justify-between items-center gap-5">
            <button className="bg-gray-300 p-3 w-10 h-5 items-center  font-bold text-cyan-800 ml-2 rounded-md text-sm hover:bg-gray-400 flex gap-3">Buy</button>
            <div className="bg-gray-300 h-7  w-30 p-3 rounded-md text-sm hover:bg-gray-400 flex items-center">
              <img src="./addToCart.png" alt="add to cart" className="h-4 w-4 items-center" />
              <button className="h-5 w-full  p-5  font-bold text-cyan-800 items-center">Add Cart</button>
            </div>


          </div>
        
        </div>
      ))}
    </div>
    </>
  );

}

export default Product;
