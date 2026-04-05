import { useParams } from "react-router";
import { useState, useEffect } from "react";
import "../app.css"
import Delivery from "../components/delivery";

export default function Order() {
  const { id } = useParams();
  console.log(id);

  const [prod, setProduct] = useState(null);
  console.log(prod);

  useEffect(() => {
    const handleOrder = async () => {
      try {
        const resp = await fetch(
          `http://127.0.0.1:8000/ecommerceApi/vendorProduct/${id}/`,
        );
        if (!resp.ok) {
          const error = await resp.text();
          alert(error);
          return;
        }
        const data = await resp.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    };
    handleOrder();
  }, []);

  return (
    <>
      <div>Viewing profile with Id:{id}</div>
      <Delivery/>
      {prod &&
        <div className="bg-[#E8E8EB] min-w-2xl m-3 p-4 flex  items-center gap-4">
          <div className="p-5 bg-[#E8E8EB] rounded-2xl  shadow-olive-200 hover:bg-amber-200">
            <img src={prod.image} alt={prod.title} className="h-30 w-full object-cover"/>
          </div>
          <div className="p-5 bg-[#E8E8EB] rounded-2xl  shadow-olive-200 flex flex-col items-start gap-2">
            <p>{prod.category.title}</p>
            <h3 className="text-[#1A1C1E] font-bold text-[34px]">{prod.title}</h3>
            <p className="text-[#1A1C1E] font-semibold text-[30px]">${prod.price}</p>
            <p className="text-[#64748B] text-[14px]">Stock:{prod.stock}</p>
            <p>{prod.description}</p>
          </div>
        </div>
      }
    </>
  );
}
