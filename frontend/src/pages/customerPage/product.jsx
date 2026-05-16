import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axisoInterceptor from "../../services/axiosInstance";

function Product() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState(0);

  useEffect(() => {
    const products = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/ecommerceApi/vendorProduct/",
        );
        if (!response.ok) {
          const errorText = await response.text();
          console.log(errorText);
          return;
        }
        const data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        alert("Error", error);
        console.log(error);
      }
    };
    products();
  }, []);

  return (
    <>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">products list</h3>

      <div className="bg-[#F3F3F6] min-h-screen p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {product.map((prod) => (
          <Link
            to={`viewProduct/${prod.id}`}
            key={prod.id}
            className="group relative bg-white p-5 rounded-2xl border border-gray-200 shadow-sm
                 hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                 flex flex-col gap-4 overflow-hidden"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={prod.img}
                alt={prod.title}
                className="w-full h-40 object-cover object-top
              group-hover:scale-110 transition duration-300"
              />
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-[#191C1D] text-sm font-semibold truncate w-[70%]">
                {prod.title}
              </h3>
              <p className="text-green-600 text-lg font-bold">${prod.price}</p>
            </div>
            <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
              {prod.description}
            </p>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition"></div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Product;
