import { useState,useEffect } from "react"
import "../app.css"

function Product(){
    const [product,setProduct]=useState([])



    async function products(){
        try {
            const response=await fetch("https://fakestoreapi.com/products")
            if(!response.ok){
                const errorText=await response.text()
                console.log(errorText)
                return 
            }
            const data=await 
            response.json()
            setProduct(data)

            
        } catch (error) {
            alert("Error",error)
            console.log(error)
        }
    }

    useEffect(()=>{
        products()
        console.log("hello sir ji")
    },[])

    return (
        <>
        
        {product.map((prod)=>(
            <div>
                <div key={prod.id} className="">
                <img src={prod.image} alt={prod.title}/>
                <h3>{prod.title}</h3>
                <p>{prod.price}</p>
                <button >Add product</button>
            </div>
            </div>
            
           
        ))
       
         
        }
        </>
    )
}

export default Product