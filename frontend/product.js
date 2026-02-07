async function fetchProduct() {
    const response=await fetch("http://127.0.0.1:8000/productsAPi/categorylistApi/")
    const data=await response.json()
    console.log(data)
    
}
fetchProduct()