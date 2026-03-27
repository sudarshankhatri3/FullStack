import "../app.css";
import { useState } from "react";
import axios from 'axios'  



const initialData={
  email: "",
  password: "",
}

export default function LoginPage() {
  const [loginData, setLoginData] = useState(initialData);
  const [showPassword, setShowPassword] = useState(false);

  async function loginUser(e) {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    if (!response.ok) {
      console.log(JSON.stringify(response))
      alert("Error", JSON.stringify(response));
      setLoginData(initialData)
      return;
    }
    console.log(JSON.stringify(response))
    localStorage.getItem('access')
    alert("login sucessfully");
    setLoginData(initialData)
  }

  return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-4 ">
        <div className="bg-emerald-500  w-full max-w-md  sm:p-6 md:p-8  flex flex-col items-center gap-4 rounded-xl px-4 py-8 shadow-2xl ">

          {/* title of page */}
          <div className="bg-amber-200 w-full h-14 rounded-xl  py-2  text-center">
            <h3 className="text-blue-500 font-bold text-lg sm:text-xl rounded-xl px-2 py-1  hover:bg-emerald-200 self-center  transition-colors duration-200">
              Welcome to swalBaby
            </h3>
          </div>
          
          {/* Form */}
          <form className="bg-indigo-600  w-full  min-h-80 backdrop-blur-md border border-white/30 p-4  sm:p-6  rounded-2xl  flex flex-col justify-center items-center gap-4">
            <input
              type="email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              placeholder="Email"
              className="w-full min-h-10  px-4 py-3 rounded-xl bg-white/20 border border-b-fuchsia-300 text-white placeholder-zinc-700 text-sm md:text-base outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-200"
            />

            <div className=" w-full  h-14 flex justify-center items-center gap-30 py-3 rounded-xl bg-white/20 border border-b-fuchsia-300 text-white placeholder-white/50 text-sm md:text-base outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-200">
              <input
                type={showPassword ? "text" : "password"}
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                placeholder="Password..."
                className="ml-5 w-30 h-10 px-4 py-3 border-none  border text-blue placeholder-zinc-700 text-sm md:text-base outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-200"
              />

              {/* Show/Hide Password */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="self-end text-xs text-white/60 outline-none hover:text-white  hover:bg-amber-400 px-3 py-1 rounded-lg transition-all duration-200"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Login Button */}
            <button
              type="button"
              onClick={loginUser}
              className="w-full  h-10 py-3 mt-1 bg-gradient-to-r from-cyan-400 to-violet-500 hover:from-cyan-300 hover:to-violet-400 active:scale-95 text-white font-semibold rounded-xl text-sm md:text-base tracking-wide transition-all duration-200 shadow-lg shadow-cyan-500/25"
            >
              Login
            </button>
          </form>
        </div>
      </div>
   
  );
}
