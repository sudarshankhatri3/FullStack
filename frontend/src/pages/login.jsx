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
      <div className="login">
        <div className="login__header">
          <h3 className="login__title">Welcome to swalBaby</h3>
        </div>

        <form className="login__form">
          <div className="login__field">
            <input className="login__input" type="email" value={loginData.email} onChange={(e)=>setLoginData({...loginData,email:e.target.value})}   placeholder="Email" />
          </div>
          {loginData.email}

          <div className="login__field login__password-field">
            <input
              className="login__input"
              type={showPassword ? "text" : "password"}
              value={loginData.password}
              onChange={(e)=>setLoginData({...loginData,password:e.target.value})}
              placeholder="Password..."
            />
            {loginData.password}

            <button
              onClick={loginUser}
              type="button"
              className="login__toggle-btn"
            >
              login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
