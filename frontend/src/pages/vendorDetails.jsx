import "../app.css";
import { useState, useEffect } from "react";
const vendorList = [
  { photo: "./vendors.png", title: "Vendors" },
  { photo: "./vAnaly.png", title: "Analytics" },
  { photo: "./vList.png", title: "Orders" },
  { photo: "./vSetting.png", title: "Settings" },
];

export default function VendorDetails() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/ecommerceApi/vendorProduct/');
        if (!res.ok) {
          alert("Error ");
          return;
        }
        const data =await res.json();
        console.log(data)
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
          {vendorList.map((vendorList) => (
            <div className="p-4 w-56 h-12 flex   items-center gap-3">
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
      <div className="bg-[#94A3B8] w-full ">
        <div className="bg-[#E3E1ED] p-4 w-full flex justify-between items-center ">
          <div className="w-full h-24">
            <h2 className="text-[#31323B] font-extrabold text-[48px]">Product Catalog</h2>
          </div>
          <div className=" w-72 flex items-center gap-3">
            <button className="bg-[#5E5E68] w-full h-10 text-center rounded-xl hover:bg-amber-100  hover:text-red-800">FILTER BY</button>
            <button className="bg-[#5E5E68] w-full h-10 text-center rounded-xl hover:bg-amber-100  hover:text-red-800">SORT NEWSET</button>
          </div>
        </div>
        <div className="bg-[#B2B1BC]  p-3 flex flex-col  gap-10">
          <div>
            {product.length>0 ? (product.map((prod)=>(
                <div key={prod.id} className="bg-[#FFFFFF] p-6 flex items-center gap-3">
                  <div className="bg-[#F5F2FB] h-40 w-45 ">
                     <p className="object-cover">{prod.image}</p>
                  </div>
                  <div className="h-40 w-96">
                    <p>{p}</p>
                    <h3>{prod.title}</h3>
                   
                   
                    <p>{prod.description}</p>

                  </div>
                  <div>
                     <p>{prod.price}</p>
                     <div>
                      <button>Edit</button>
                      <button >Remove</button>
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
