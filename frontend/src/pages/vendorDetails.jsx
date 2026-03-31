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
        const res = await fetch("http://127.0.0.1:8000/ecommerceApi/vendorProduct/");
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
      <div className="bg-[#94A3B8] w-full">
        <div>
            {product.length>0 ? (product.map((prod)=>(
                <div key={prod.id}>
                    <h3>{prod.title}</h3>
                    <p>{prod.price}</p>
                    <p>{prod.image}</p>
                    <p>{prod.description}</p>
                </div>
            ))):<p>Loading or Data not found</p>}
          
          <div>
            <button>Edit</button>
            <button >Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}
