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
      <div className="mt-20 bg-[#FFFFFF] flex flex-col justify-center items-center gap-10 ">
        <div className="text-[#01A49E]">
          <h2 className="text-4xl">Most popular categories <span className="text-[#000000]">for baby Product</span></h2>
        </div>
        <div className="w-full flex flex-wrap justify-center gap-8">
         {
            images.map((prod,index)=>(
                <div key={index} className="flex flex-col justify-center items-center gap-2 w-20 sm:w-20 md:w-30 ">
                    <img src={prod.img}alt={prod.title} className="w-20  h-20 object-fit sm:w-20 sm:h-25 md:w-30 md:h-30"/>
                    <p className="font-bold block text-xs ">{prod.title}</p>
                </div>
            ))
         }
        </div>
        <div className="bg-centergrid grid-cols-2 gap-40 ">
            <div className="bg-[url('/banner1.png')] bg-cover w-full h-[400]">
                    <p>Best Price</p>
                    <p>$69</p>
                    <p>3-pack Cutton Rib Bodysuits</p>
                    <button>Shop Now</button>
            </div>
            <div className="bg-[url('/banner2.png')] bg-cover ">
                
                    <p>Best Price</p>
                    <p>$69</p>
                    <p>3-pack Cutton Rib Bodysuits</p>
                    <button>Shop Now</button>
                </div>
                
            
            </div>
        </div>
      </div>
    </>
  );
}
