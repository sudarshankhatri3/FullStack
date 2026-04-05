import React from "react";
import { useState, useEffect } from "react";

const deliveryDetails = [
  { image: "../delivery.png", title: "Shipping" },
  { image: "../payment.png", title: "Payment" },
  { image: "../review.png", title: "Review" },
];
const deliveryInfo = {
  phone_number: "",
  building_no: "",
  colony: "",
  province: "",
  district: "",
  city: "",
  area: "",
  address: "",
  label: "",
  zip: "",
};

export default function Delivery() {
  const [delivery, setDelivery] = useState(deliveryInfo);

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
      if (!deliveryPost.ok) {
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
        <div className="bg-[#F1F4F5] w-full min-h-screen flex flex-col items-center gap-8">
          <div className="w-96 h-24">
            <h1 className="text-[#172554] font-extrabold text-[30px] ">
              Delivery Information
            </h1>
            <p className="text-[#5A6062] text-[16px] ">
              Enter your shipping details below. Our couriers provide tracked
              atelier delivery for all premium pieces.
            </p>
          </div>

          <form onSubmit={deliveryData}>
            <div>
              <label htmlFor="phone_number">PHONE NUMBER</label>
              <input
                type="text"
                value={delivery.phone_number}
                onChange={(e) =>
                  setDelivery({ ...delivery, phone_number: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="address">ADDRESS LABEL</label>
              <input
                type="text"
                value={delivery.label}
                onChange={(e) =>
                  setDelivery({ ...delivery, label: e.target.value })
                }
              />
            </div>
            <div>
              <div>
                <label htmlFor="building">BUILDING NO</label>
                <input
                  type="text"
                  value={delivery.building_no}
                  onChange={(e) =>
                    setDelivery({ ...delivery, building_no: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="colony">COLONY</label>
                <input
                  type="text"
                  value={delivery.colony}
                  onChange={(e) =>
                    setDelivery({ ...delivery, colony: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="area">AREA</label>
                <input
                  type="text"
                  value={delivery.area}
                  onChange={(e) =>
                    setDelivery({ ...delivery, area: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="street">STREET ADDRESS</label>
                <input
                  type="text"
                  value={delivery.address}
                  onChange={(e) =>
                    setDelivery({ ...delivery, address: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="district">DISTRICT</label>
                <input
                  type="text"
                  value={delivery.district}
                  onChange={(e) =>
                    setDelivery({ ...delivery, district: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="city">CITY</label>
                <input
                  type="text"
                  value={delivery.city}
                  onChange={(e) =>
                    setDelivery({ ...delivery, city: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="city">PROVINCE</label>
                <select
                  value={delivery.province}
                  onChange={(e) =>
                    setDelivery({ ...delivery, province: e.target.value })
                  }
                  className="w-full p-2 border rounded-md"
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
              <div>
                <label htmlFor="city">ZIP/POSTCODE</label>
                <input
                  type="text"
                  value={delivery.zip}
                  onChange={(e) =>
                    setDelivery({ ...delivery, zip: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <button>Continue to Payment</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
