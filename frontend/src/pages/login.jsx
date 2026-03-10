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
      <div className="bg-emerald-500 min-h-[500px] w-60 flex flex-col justify-center items-center gap-3 sm:w-72 md:w-80 lg:w-96 flex-wrap rounded-xl">
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
      </div>
    </>
  );
}
