import "../app.css"
export default function Nutri(){
    return (
        <>
         <div className='bg-[#F0E7D9] w-full  flex flex-row justify-center items-center  flex-wrap gap-40 md:flex-row min-h-120 '>
            <div className="flex flex-col  justify-center items-center mb-60">
                <h3 className="font-bold text-3xl">Nutri 7-In-1 Base</h3>
                <h4 className="font-light text-4xl text-black">On Formula 400g</h4>
                <p className="p-96 font-light text-2xl">Lorem ispum dorlca <br />and photo</p>
                <button className="mt-20 min-h-10 w-25  bg-[#01A49E] text-[#FFFFFF] text-4 rounded-xl  text-center">SHOP NOW</button>
            </div>
            <div className="flex justify-center items-center">
                <img src="/head2.png" alt="nutration image" className="min-h-75 w-120 "/>
            </div>
         </div>
        </>
    )
}