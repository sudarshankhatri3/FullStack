import { Link } from "react-router-dom";

const vendorList = [
  { photo: "./vendors.png", title: "Vendors", path:"" },
  { photo: "./vAnaly.png", title: "Analytics",  path:"/vendorAnalysis"},
  { photo: "./vList.png", title: "Orders", path: "/vendorOrder" },
  { photo: "./vSetting.png", title: "Settings", path: "/settings" },
];
export default function AsideBar() {
  return (
    <aside className="min-h-screen w-50 p-3 bg-[#F3F4F5] flex flex-col gap-24">
      <div className="flex flex-col gap-6">
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
          {vendorList.map((vendorList, index) => (
            <Link to={vendorList.path}
              key={index}
              className="p-4 w-56 h-12 flex   items-center gap-3"
            >
              <img src={vendorList.photo} alt={vendorList.title} />
              <a
                href={vendorList.title}
                className="text-[#475569] text-[16px] font-semibold"
              >
                {vendorList.title}
              </a>
            </Link>
          ))}
        </div>
      </div>

      <Link to={{pathname:"/addProduct"}}  className="mt-auto w-full h-14 bg-[#1A146B] text-white flex items-center justify-center rounded-lg">
        <button className="text-[#FFFFFF] items-center font-semibold text-xl">Add Product</button>
      </Link>
    </aside>
  );
}
