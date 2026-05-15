import React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2"
import {CountrySelect,StateSelect,CitySelect} from "react-country-state-city"

const deliveryDetails = [
  { image: "../delivery.png", title: "Shipping" },
  { image: "../payment.png", title: "Payment" },
  { image: "../review.png", title: "Review" },
];
const deliveryInfo = {
  phone_number:"",
  building_no:"",
  colony:"",
  province:"",
  district:"",
  city:"",
  area:"",
  address:"",
  label:"",
  zip:""
};

export default function Delivery() {
  const [delivery, setDelivery] = useState(deliveryInfo);
  const [country, setCountry] = useState({
      id: 153, 
      name: "Nepal"
    });

  const deliveryData = async (e) => {
    e.preventDefault();
    try {
      const deliveryPost = await fetch(
        "http://127.0.0.1:8000/ecommerceApi/deliveryInformation/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(delivery),
        },
      );
      const text = await deliveryPost.text()
      console.log("RAW RESPONSE:", text);
      if (!deliveryPost.ok) {
        // Swal.fire({
        //     title:'Erron handle',
        //     text:"Do you want to Continue",
        //     icon:'Warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33', 
        //     confirmButtonText: 'Yes!'
        // }).then((result)=>{
        //     if(result.value){
        //         this.props.submitUser(this.state)
        //     }
        // })
        const error = await deliveryPost.json();
        alert(JSON.stringify(error));
        return;
      }
      alert("Data added sucessfully !!!!!");
    } catch (error) {
      alert(error);
    }
  };

  console.log(delivery);
  return (
    <>
      <div className="bg-[#E2E8F0] w-full p-8  flex  items-center gap-8">
        <div className="bg-[#F8FAFC] w-70 min-h-screen p-6 rounded-2xl shadow-emerald-300 flex flex-col items-center gap-4">
          <div className="w-full h-full">
            <h2 className="text-[#172554] text-2xl font-bold">Checkout</h2>
          </div>

          <div className="mt-6 p-2 flex flex-col items-center gap-4">
            {deliveryDetails.map((info, index) => (
              <div key={index} className="flex items-center gap-3">
                <img src={info.image} alt={info.title} />
                <h2>{info.title}</h2>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3">
            <img src="../arrow.png" alt="arrow " />
            <button className="text-[#1E3A8A] font-semibold text-[14px] ">
              Return to Cart
            </button>
          </div>
        </div>
        <div className="bg-[#F1F4F5] w-full min-h-screen p-3 sm:p-6 lg:p-10 rounded-2xl flex flex-col items-center gap-8">
          <div className=" w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl  bg-white p-4 sm:p-6 lg:p-8 rounded-2xl flex flex-col gap-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#172554">
              Delivery Information
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-[#5A6062]">
              Enter your shipping details below. Our couriers provide tracked
              atelier delivery for all premium pieces.
            </p>
          </div>

          <form onSubmit={deliveryData} className="flex flex-col  gap-4">
            <div className="w-full h-full flex flex-col gap-1">
              <label htmlFor="phone_number"  className="text-xs font-semibold text-[#5A6062]">PHONE NUMBER</label>
              <input
                type="text"
                value={delivery.phone_number}
                placeholder="+977 9766501968"
                onChange={(e) =>
                  setDelivery({ ...delivery, phone_number: e.target.value })
                }
                className="w-full h-12 p-3 rounded-xl bg-[#ADB3B5]"
              />
            </div>
            <div className="w-full h-full flex flex-col gap-1">
              <label htmlFor="address"  className="text-xs font-semibold text-[#5A6062]">ADDRESS LABEL</label>
              <select
                type="text"
                value={delivery.label}
                onChange={(e) =>
                  setDelivery({ ...delivery, label: e.target.value })
                }
                className="w-full h-12 p-3 rounded-xl bg-[#ADB3B5] "
              >
                <option value="" disabled>Select Option</option>
                <option value="HOME">Home</option>
                <option value="OFFICE">Office</option>
              </select>
            </div>
            <div  className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="building"  className="text-xs font-semibold text-[#5A6062]">BUILDING NO</label>
                <input
                  type="text"
                  value={delivery.building_no}
                  onChange={(e) =>
                    setDelivery({ ...delivery, building_no: e.target.value })
                  }
                  className="w-full h-12 p-3 rounded-xl bg-[#ADB3B5]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="colony"  className="text-xs font-semibold text-[#5A6062]">COLONY</label>
                <input
                  type="text"
                  value={delivery.colony}
                  onChange={(e) =>
                    setDelivery({ ...delivery, colony: e.target.value })
                  }
                  className="w-full h-12 p-3 rounded-xl bg-[#ADB3B5]"
                />
              </div>
            </div>
            <div  className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="area"  className="text-xs font-semibold text-[#5A6062]">AREA</label>
                <input
                  type="text"
                  value={delivery.area}
                  onChange={(e) =>
                    setDelivery({ ...delivery, area: e.target.value })
                  }
                  className="w-full h-12 p-3 rounded-xl bg-[#ADB3B5]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="street"  className="text-xs font-semibold text-[#5A6062]">STREET ADDRESS</label>
                <input
                  type="text"
                  value={delivery.address}
                  onChange={(e) =>
                    setDelivery({ ...delivery, address: e.target.value })
                  }
                  className="w-full h-12 p-3 rounded-xl bg-[#ADB3B5]"
                />
              </div>
            </div>
            <div  className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="district"  className="text-xs font-semibold text-[#5A6062]">DISTRICT</label>
                <input
                  // countryid={country?.id}
                  // stateid={delivery.province?.id}
                  type="text"
                  value={delivery.district}
                  onChange={(e) =>
                    setDelivery({ ...delivery, district: e.target.value })
                  }
                  placeHolder="Select City"
                className="w-full h-12 p-3 rounded-xl bg-[#ADB3B5]"
                /> 
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="city"  className="text-xs font-semibold text-[#5A6062]">CITY</label>
                <input
                  type="text"
                  value={delivery.city}
                  onChange={(e) =>
                    setDelivery({ ...delivery, city: e.target.value })
                  }
                  className="w-full h-12 p-3 rounded-xl bg-[#ADB3B5]"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="city"  className="text-xs font-semibold text-[#5A6062]">PROVINCE</label>
                <select
                  // countryid={country?.id}
                  value={delivery.province}
                  onChange={(e) =>
                    setDelivery({ ...delivery, province: e.target.value})
                  }
                  placeHolder="Select state"
                 className="w-full h-12 p-3 rounded-xl bg-[#ADB3B5]"
                >
                   <option value="" disabled>
                    Select Province
                  </option>
                  <option value="Koshi">Koshi Province</option>
                  <option value="Madhesh">Madhesh Province</option>
                  <option value="Bagmati">Bagmati Province</option>
                  <option value="Gandaki">Gandaki Province</option>
                  <option value="Lumbini">Lumbini Province</option>
                  <option value="Karnali">Karnali Province</option>
                  <option value="Sudurpashchim">Sudurpashchim Province</option> 
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="city"  className="text-xs font-semibold text-[#5A6062]">ZIP/POSTCODE</label>
                <input
                  type="text"
                  value={delivery.zip}
                  onChange={(e) =>
                    setDelivery({ ...delivery, zip: e.target.value })
                  }
                  placeholder="01234"
                  className="w-full h-12 p-3 rounded-xl bg-[#ADB3B5]"
                />
              </div>
            </div>
            <div className="bg-blue-900 mt-2 w-full h-10 rounded-xl flex justify-center items-center  gap-2">
              <button className="w-full  h-12  rounded-xl  bg-blue-900  text-white  text-sm sm:text-base  font-semibold">Continue to Payment</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
