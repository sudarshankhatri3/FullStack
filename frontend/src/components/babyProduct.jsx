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
    {img:"./stroller.png",title:"Stroller crib chair"},
    {img:"./washes.png",title:"Washes & Bath"},
    {img:"./cloth.png",title:"Baby Fashion"}
  ]
  return (
    <>
      <div className="mt-20 bg-[#FFFFFF] flex flex-col justify-center items-center gap-10">
        <div className="text-[#01A49E]">
          <h2>Most popular categories <span className="text-[#000000]">for baby Product</span></h2>
        </div>
        <div className="w-full flex flex-wrap justify-center gap-8">
         {
            images.map((prod)=>(
                <div className="flex flex-col justify-center items-center gap-2">
                    <img src={prod.img}alt={prod.title} className="w-[110] h-[110] border-r-amber-50"/>
                    <p className="font-bold block text-xs ">{prod.title}</p>
                </div>
            ))
         }
         
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
