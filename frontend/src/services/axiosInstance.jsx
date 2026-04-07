import axios from "axios";

const axisoInterceptor=axios.create({
  baseURL:"http://127.0.0.1:8000/ecommerceApi/"
})


axisoInterceptor.interceptors.request.use((config)=>{
  const token=localStorage.getItem("access")
  console.log(token)

  if(token){
    config.headers.Authorization=`Bearer ${token}`
  }
  return config
})

export default axisoInterceptor