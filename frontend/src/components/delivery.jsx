const deliveryDetails=[
    {image:"./delivery.png",title:"Shipping"},
    {image:"./payment.png",title:"Payment"},
    {image:"./review.png",title:"Review"}
]

export default function Delivery(){
    return(
        <>
        <div>
            <div>
                <div>
                    <h2>Checkout</h2>
                </div>
                
                <div>
                    {
                        deliveryDetails.map((info)=>(
                            <div>
                                <img src={info.image} alt={info.title}/>
                                <h2>{info.title}</h2>
                            </div>
                        ))
                    }


                </div>
                <div>
                    <img src="./arrow.png" alt="arrow " />
                    <button>Return to Cart</button>
                </div>
            </div>
            <div>
                <div>
                    <h1>Delivery Information</h1>
                    <p>Enter your shipping details below. Our couriers provide tracked atelier delivery for all premium pieces.</p>
                </div>
                <div>
                    <form action="">
                       <div>
                        <label htmlFor="phone_number">PHONE NUMBER</label>
                        <input type="tel" />
                       </div>
                        <div>
                            <label htmlFor="phone_number">ADDRESS LABEL</label>
                            <input type="tel" />
                        
                       </div>
                       <div>
                        <div>
                            <label htmlFor="building">BUILDING NO</label>
                            <input type="text"/>
                        </div>
                        <div>
                            <label htmlFor="colony">COLONY</label>
                            <input type="text" />
                        </div>
                       </div>
                       <div>
                        <div>
                            <label htmlFor="area">AREA</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="street">STREET ADDRESS</label>
                            <input type="text" />
                        </div>
                       </div>
                       <div>
                        <div>
                            <label htmlFor="district">DISTRICT</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="city">CITY</label>
                            <input type="text" />
                        </div>
                       </div>
                       <div>
                        <div>
                            <label htmlFor="city">PROVINCE</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="city">ZIP/POSTCODE</label>
                            <input type="text" />
                        </div>
                       </div>
                       <div>
                        <button>Continue to Payment</button>
                       </div>
                    </form>
                </div>

            </div>
        </div>
        </>

    )
}