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
        const res = await fetch(`https://fakestoreapi.com/products`);
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
          <h2>Top Product Titles</h2>

          <ol>
            <li>Handcrafted Wooden Desk Organizer</li>
            <li>Premium Leather Wallet for Men</li>
            <li>Wireless Bluetooth Headphones</li>
            <li>Eco-Friendly Bamboo Water Bottle</li>
            <li>Smart LED Study Lamp with USB Port</li>
            <li>Minimalist Wall Clock Modern Design</li>
            <li>Portable Power Bank 10000mAh</li>
            <li>Cotton Casual T-Shirt Unisex</li>
            <li>Stainless Steel Kitchen Knife Set</li>
            <li>Adjustable Laptop Stand Aluminum</li>
          </ol>
          <div>
            <button>Edit</button>
            <button onSubmit={vendorData}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}
