import "../app.css";

export default function BabyProduct() {
  return (
    <>
      <div className="mt-20 bg-[#FFFFFF] flex flex-col justify-center items-center gap-10">
        <div className="text-[#01A49E]">
          <h2>Most popular categories for baby Product</h2>
        </div>
        <div className="min-w-full min-h-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-4">
            <img src="./newArrival.png" alt="new arrival image" className="w-[110] h-[110] border-r-amber-50"/>
            <p className="font-bold block">New Arrival</p>
          </div>
          <div>
            <img src="./sales.png" alt="sales img" />
            <p>Clearance</p>
          </div>
          <div>
            <img src="./pregnancy.png" alt="pregnancy image" />
            <p>Pregnancy & Postpartum</p>
          </div>
          <div>
            <img src="./milk.png" alt="milk image" />
            <p>Milks and Feeds</p>
          </div>
          <div>
            <img src="./diper.png" alt="diper" />
            <p>Dipers and Wipes</p>
          </div>
          <div>
            <img src="./infant.png" alt="inftan" />
            <p>Infant</p>
          </div>
          <div>
            <img src="./eat.png" alt="eat and drink" />
            <p>Eat & Drink supplies</p>
          </div>
          <div>
            <img src="./stroller.png" alt="stroller" />
            <p>Stroller crib chair</p>
          </div>
          <div>
            <img src="./washes.png" alt="washes" />
            <p>Washes & Bath</p>
          </div>
          <div>
            <img src="./cloth.png" alt="closthes" />
            <p>Baby Fashion</p>
          </div>
        </div>
      </div>
    </>
  );
}
