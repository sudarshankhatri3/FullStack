import "../app.css";

export default function BabyProduct() {
  const images = [
    { img: "./newArrival.png", title: "New Arrival" },
    { img: "./sales.png", title: "Clearance" },
    { img: "./pregnancy.png", title: "Pregnancy & Postpartum" },
    { img: "./milk.png", title: "Milks and Feeds" },
    { img: "./diper.png", title: "Dipers and Wipes" },
    { img: "./infant.png", title: "Infant" },
    { img: "./eat.png", title: "Eat & Drink supplies" },
    { img: "./stroller.png", title: "Stroller crib chair" },
    { img: "./washes.png", title: "Washes & Bath" },
    { img: "./cloth.png", title: "Baby Fashion" },
  ];

  return (
    <>
      <div className="mt-6 p-6 bg-[#FFFFFF] flex flex-col justify-center items-center gap-24">
        <div className="text-[#01A49E]">
          <h2 className="text-4xl">
            Most popular categories{" "}
            <span className="text-[#000000]">for baby Product</span>
          </h2>
        </div>
        <div className="w-full flex  justify-center gap-8  ">
          {images.map((prod, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-2 w-20 sm:w-20 md:w-30 "
            >
              <img
                src={prod.img}
                alt={prod.title}
                className="w-20  h-20 object-fit  sm:w-20 sm:h-25 md:w-30 md:h-30"
              />
              <p className="font-bold block text-xs ">{prod.title}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-evenly items-center gap-40 ">
          <div className="bg-[url('/banner1.png')] bg-cover w-120 min-h-40">
            <div className="flex flex-row items-center gap-10">
              <p className="px-5 font-light text-2xl text-amber-100">
                Best <br />
                Price
              </p>
              <p className="mt-10 font-bold text-3xl text-amber-100">$69</p>
            </div>
            <p className="text-amber-50 text-light text-xl">
              3-pack Cutton Rib <br />
              Bodysuits
            </p>
            <button className="bg-amber-300 h-28 w-28 rounded-xl">
              Shop Now
            </button>
          </div>
          <div className="bg-[url('/banner2.png')] bg-cover min-w-120 min-h-40 ">
            <div className="mt-80 flex flex-col  justify-end items-end  gap-10">
              <p className="px-5 font-light text-2xl ">
                10% OFF
                <br />
                for Diapers
              </p>
              <p className=" text-light text-xl block">
                Earn 10% Cash back <br />on Swatbabymall. Expore Now!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
