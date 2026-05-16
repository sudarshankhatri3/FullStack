import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AsideBar from "../../components/vendor/vendorPortal";
export default function VendorDetails() {
  const [product, setProduct] = useState([]);

  const dataHandler = async (userId) => {
    console.log(userId);
    if (!userId) {
      alert("User not exist");
      return;
    }
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/ecommerceApi/vendorProduct/${userId}/`,
        {
          method: "DELETE",
        },
      );
      if (!response.ok) {
        const error = await response.text();
        alert(error);
        return;
      }
      setProduct((prev) => prev.filter((item) => item.id != userId));
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "http://127.0.0.1:8000/ecommerceApi/vendorProduct/",
        );
        if (!res.ok) {
          alert("Error ");
          return;
        }
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        alert(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="flex">
      <AsideBar />

      <div className="bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 min-h-screen w-full">
        {/* Header */}
        <div className="bg-white/70 backdrop-blur-md shadow-sm px-6 lg:px-10 py-5 w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-200">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 tracking-wide">
            Product Catalog
          </h2>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <button
              className="bg-gray-800 text-white px-6 py-2.5 text-sm font-semibold rounded-xl
                           hover:bg-amber-400 hover:text-black transition-all duration-300
                           shadow-md hover:shadow-lg active:scale-95"
            >
              FILTER BY
            </button>
          </div>
        </div>

        <div className="bg-slate-300/60 p-4 sm:p-6 lg:p-10 flex flex-col gap-5">
          {product.length > 0 ? (
            product.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300
                       p-4 sm:p-5 flex flex-col lg:flex-row items-start lg:items-center
                       gap-5 hover:-translate-y-1"
              >
                <div
                  className="bg-slate-100 rounded-xl w-full sm:w-40 lg:w-48 h-40 lg:h-44
                            flex items-center justify-center overflow-hidden shadow-sm"
                >
                  <img
                    src={prod.img}
                    alt={prod.title}
                    className="w-full h-full object-contain hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <span className="bg-indigo-600 text-white px-3 py-1 text-xs rounded-full w-fit shadow-sm">
                    Electronics
                  </span>
                  <h3 className="text-gray-800 font-bold text-lg sm:text-xl lg:text-2xl line-clamp-1">
                    {prod.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 sm:line-clamp-3">
                    {prod.description}
                  </p>
                </div>
                <div className="flex flex-col sm:items-end gap-4 w-full lg:w-auto">
                  <p className="text-gray-900 font-extrabold text-xl sm:text-2xl">
                    ${prod.price}
                  </p>
                  <div className="flex items-center gap-3">
                    <button
                      className="bg-gray-100 hover:bg-green-100 p-2 rounded-lg
                             transition transform hover:scale-110 shadow-sm"
                      aria-label="Edit product"
                    >
                      <img src="./edit.png" alt="edit" className="w-5 h-5" />
                    </button>

                    <button
                      className="bg-gray-100 hover:bg-red-100 p-2 rounded-lg
                             transition transform hover:scale-110 shadow-sm"
                      aria-label="Remove product"
                      onClick={() => dataHandler(prod.id)}
                    >
                      <img
                        src="./Button.png"
                        alt="remove"
                        className="w-5 h-5"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-700 font-medium">
              Loading or Data not found
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
