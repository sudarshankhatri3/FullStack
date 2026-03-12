import "../app.css"
export default function Nutri(){
    return (
        <>
         <div className='bg-[#F0E7D9] w-full min-h-80 flex flex-row justify-center items-center flex-wrap gap-48 md:flex-row min-h-120 '>
            <div className="flex flex-col  mb-60">
                <h3 className="font-bold text-3xl">Nutri 7-In-1 Base</h3>
                <h4 className="font-light text-4xl text-black">On Formula 400g</h4>
                <p className="font-light text-2xl  p-20">Lorem ispum dorlca <br />and photo</p>
                <button className="mt-40 h-10 w-30  bg-amber-300 rounded-xl">SHOP NOW</button>
            </div>
            <div className="">
                <img src="/head2.png" alt="nutration image" className="min-h-75 w-120 -mt-20"/>
            </div>
         </div>
        </>
    )
}