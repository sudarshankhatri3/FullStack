import "../app.css";

export default function BabyProduct() {

  const images=[
    {img:"./newArrival.png",title:"New Arrival"},
    {img:"./sales.png" ,title:"Clearance"},
    {img:"./pregnancy.png",title:"Pregnancy & Postpartum"},
    {img:"./milk.png",title:"Milks and Feeds"},
    {img:"./diper.png",title:"Dipers and Wipes"},
    {img:"./infant.png",title:"Infant"},
    {img:"./eat.png",title:"Eat & Drink supplies"},
    {}{}{}
  ]
  return (
    <>
      <div className="mt-20 bg-[#FFFFFF] flex flex-col justify-center items-center gap-10">
        <div className="text-[#01A49E]">
          <h2>Most popular categories <span className="text-[#000000]">for baby Product</span></h2>
        </div>
        <div className="w-full flex flex-wrap justify-center gap-8">
          <div className="flex flex-col justify-center items-center gap-2">
            <img src= alt="new arrival image" className="w-[110] h-[110] border-r-amber-50"/>
            <p className="font-bold block text-xs "></p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <img src=alt="sales img"  className="w-[110] h-[110] border-r-amber-50" />
            <p className="font-bold block text-xs "></p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <img src= alt="pregnancy image"  className="w-[110] h-[110] border-r-amber-50" />
            <p className="font-bold block text-xs "></p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <img src= alt="milk image" className="w-[110] h-[110] border-r-amber-50"/>
            <p className="font-bold block text-xs"></p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <img src= alt="diper" className="w-[110] h-[110] border-r-amber-50"/>
            <p className="font-bold block text-xs"></p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <img src= alt="inftan" className="w-[110] h-[110] border-r-amber-50" />
            <p className="font-bold block text-xs"></p>
          </div >
          <div className="flex flex-col justify-center items-center gap-4">
            <img src= alt="eat and drink"  className="w-[110] h-[110] border-r-amber-50"/>
            <p className="font-bold block text-xs"></p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <img src="./stroller.png" alt="stroller" className="w-[110] h-[110] border-r-amber-50" />
            <p className="font-bold block text-xs">Stroller crib chair</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <img src="./washes.png" alt="washes" className="w-[110] h-[110] border-r-amber-50" />
            <p className="font-bold block text-xs">Washes & Bath</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <img src="./cloth.png" alt="closthes" className="w-[110] h-[110] border-r-amber-50"/>
            <p className="font-bold block text-xs">Baby Fashion</p>
          </div>
        </div>
        <div className="flex justify-center items-center ">
            <div>
                <div>
                    <p>Best Price</p>
                    <p>$69</p>
                    <p>3-pack Cutton Rib Bodysuits</p>
                    <button>Shop Now</button>
                </div>
                <div>
                    <img src="./banner1.png" alt="banner" />
                </div>
            </div>
            <div>
                 <div>
                    <p>Best Price</p>
                    <p>$69</p>
                    <p>3-pack Cutton Rib Bodysuits</p>
                    <button>Shop Now</button>
                </div>
                <div>
                    <img src="./banner1.png" alt="banner" />
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
