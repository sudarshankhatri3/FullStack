import "../app.css";
import { useState, useEffect } from "react";
import VendorProduct from "./vendorProduct";
import { Link } from "react-router";
const vendorList = [
  { photo: "./vendors.png", title: "Vendors" },
  { photo: "./vAnaly.png", title: "Analytics" },
  { photo: "./vList.png", title: "Orders" },
  { photo: "./vSetting.png", title: "Settings" },
];

export default function VendorDetails() {
  const [product, setProduct] = useState([]);

  const dataHandler= async (userId)=>{
    console.log(userId)
    if(!userId){
      alert("User not exist")
      return
    }
    try {
      const response=await fetch(`http://127.0.0.1:8000/ecommerceApi/vendorProduct/${userId}/`,{
        method:"DELETE"
      })
      if(!response.ok){
        const error=await response.text()
        alert(error)
        return
      }
      alert(response.ok)
    } catch (error) {
      alert (error)
    }
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/ecommerceApi/vendorProduct/');
        if (!res.ok) {
          alert("Error ");
          return;
        }
        const data =await res.json();
        setProduct(data);
      } catch (error) {
        alert(error)
      }
    };
    fetchPosts()
  }, []);

  return (
    <div className="flex">
      <aside className="min-h-screen w-50 p-3 bg-[#F3F4F5] flex flex-col gap-6">
        <div className="w-52 h-9 ">
          <div className="flex items-center gap-2">
            <img src="./Background.png" alt="background png" />
            <div>
              <h3 className="text-[#001944] font-extrabold">Vendor Portal</h3>
              <p className="text-[#64748B] font-medium text-3">
                Management suite
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {vendorList.map((vendorList,index) => (
            <div key={index} className="p-4 w-56 h-12 flex   items-center gap-3">
              <img src={vendorList.photo} alt={vendorList.title} />
              <a
                href={vendorList.title}
                className="text-[#475569] text-[16px] font-semibold"
              >
                {vendorList.title}
              </a>
            </div>
          ))}
        </div>
      </aside>
      <div className="bg-[#94A3B8] min-h-screen w-full ">
        <div className="bg-[#E3E1ED] p-4  sm:px-6 lg:px-10  py-4 w-full flex flex-col sm:flex-row  justify-between items-start sm:items-center gap-4">
          <h2 className="bg-[#E3E1ED] px-4 sm:px-6 text-[48px] lg:px-10 py-4 w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">Product Catalog</h2>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <button className="bg-[#5E5E68] px-5 py-2.5 text-white text-sm font-semibold rounded-xl hover:bg-amber-100 hover:text-red-800 transition-colors duration-200 text-center">FILTER BY</button>
            <Link to={{pathname:"/vendorProduct"}} className="bg-[#5E5E68] px-5 py-2.5 text-white text-sm font-semibold rounded-xl hover:bg-amber-100 hover:text-red-800 transition-colors duration-200 text-center">Add Product</Link>
          </div>
        </div>
        <div className="bg-[#B2B1BC] p-3 sm:p-5 lg:p-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            {product.length>0 ? (product.map((prod)=>(
                <div key={prod.id}  className="bg-white rounded-xl shadow-sm p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <div  className="bg-[#F5F2FB] rounded-lg shrink-0 w-full sm:w-36 lg:w-44 h-36 lg:h-40 flex items-center justify-center overflow-hidden">
                     <img src={prod.img} alt={prod.title} className="w-full h-full object-contain"/>
                  </div>
                  <div className="flex sm:flex-col items-center justify-between sm:justify-center w-full sm:w-auto gap-4 sm:gap-6 shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0">
                    <span className="bg-[#555C8C] text-white rounded-xl px-3 py-0.5 text-xs w-fit">Electronics</span>
                    <h3 className="text-[#31323B] font-bold text-lg sm:text-xl lg:text-2xl leading-snug truncate">{prod.title}</h3>
                    <p className="text-[#31323B] text-sm line-clamp-2 sm:line-clamp-3">{prod.description}</p>

                  </div>
              <div className="flex sm:flex-col items-center justify-between sm:justify-center w-full sm:w-auto gap-4 sm:gap-6 shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0">
                <p className="text-[#31323B] font-extrabold text-xl sm:text-2xl">
                  ${prod.price}
                </p>
                <div className="flex items-center gap-4">
                  <button className="hover:scale-110 transition-transform duration-150" aria-label="Edit product">
                    <img src="./edit.png" alt="edit" className="w-6 h-6" />
                  </button>
                  <button className="hover:scale-110 transition-transform duration-150" aria-label="Remove product" onClick={()=>dataHandler(prod.id)}>
                    <img src="./Button.png" alt="remove" className="w-6 h-6" />
                  </button>
                </div>
              </div>
              </div>
            ))):<p>Loading or Data not found</p>}
          </div>
            
        </div>
      </div>
    </div>
  );
}
