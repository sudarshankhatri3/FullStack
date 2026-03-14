import "../app.css";
import { useState } from "react";

export default function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
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
      alert("Respond not found !!");
    }
    alert("login sucessfully");
  }

  return (
    <>
      {/* <div className="bg-emerald-500 min-h-[500px] w-60 flex flex-col justify-center items-center gap-3 sm:w-72 md:w-80 lg:w-96 flex-wrap rounded-xl">
        <div className="font-bold text-3xl  bg-amber-200 rounded-xl sm:text-3xl md:text-5xl lg:text-6xl  bg-amber-200 rounded-xl">
          <h3 className="text-blue-500 hover:bg-emerald-200 rounded-xl ">
            Welcome to swalBaby
          </h3>
        </div>

        <form className="bg-gray-500  mt-20 p-4 min-h-50 rounded-2xl w-60 flex flex-col justify-center items-center">
          <input
            className="login__input"
            type="email"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            placeholder="Email"
          />

          {loginData.email}

          <input
            className="login__input"
            type={showPassword ? "text" : "password"}
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            placeholder="Password..."
          />
          <button
            className="bg-amber-400"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "show" : "hide"}
          </button>

          <button
            onClick={loginUser}
            type="button"
            className="login__toggle-btn"
          >
            login
          </button>
        </form>
      </div> */}
      <div className="min-h-screen  bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center p-4">
        <div className="bg-emerald-500 min-h-[500px] w-full max-w-[240px] sm:max-w-[288px] md:max-w-[320px] lg:max-w-[384px] flex flex-col justify-center items-center gap-10 rounded-xl px-4 py-8 shadow-2xl mx-auto">
         
          <div className="bg-amber-200 w-full min-h-14  rounded-xl px-4 py-2 font-bold text-3xl sm:text-xl md:text-xl lg:text-3xl text-center">
            <h3 className="text-blue-500 hover:bg-emerald-200 self-center rounded-xl px-2 py-1 transition-colors duration-200">
              Welcome to swalBaby
            </h3>
          </div>

         
          <form className="bg-white/20   w-90 min-h-80 backdrop-blur-md border border-white/30 mt-5 p-5 rounded-2xl focus:text-blue-800 flex flex-col justify-center items-center gap-3">
            <input
              type="email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              placeholder="Email"
              className="w-60 min-h-10  px-4 py-3 rounded-xl bg-white/20 border border-b-fuchsia-300 text-white placeholder-zinc-400 text-sm md:text-base outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-200"
            />

            
            {/* Password Input */}
            <input
              type={showPassword ? "text" : "password"}
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              placeholder="Password..."
              className="w-60 min-h-10 px-4 py-3 rounded-xl bg-white/20 border border-b-fuchsia-300 text-white placeholder-white/50 text-sm md:text-base outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-200"
            />

            {/* Show/Hide Password */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="self-end text-xs text-white/60 hover:text-white bg-amber-400/80 hover:bg-amber-400 px-3 py-1 rounded-lg transition-all duration-200"
            >
              {showPassword ? "Hide" : "Show"}
            </button>

            {/* Login Button */}
            <button
              type="button"
              onClick={loginUser}
              className="w-40 min-h-10 py-3 mt-1 bg-gradient-to-r from-cyan-400 to-violet-500 hover:from-cyan-300 hover:to-violet-400 active:scale-95 text-white font-semibold rounded-xl text-sm md:text-base tracking-wide transition-all duration-200 shadow-lg shadow-cyan-500/25"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
