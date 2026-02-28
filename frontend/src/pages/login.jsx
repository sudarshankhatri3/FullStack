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
      <div>
        <div>
          <h3>Login</h3>
        </div>
        <form action="" onSubmit={loginUser}>
          <div>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <input
              type={showPassword ? "hide" : "show"}
              placeholder="password....."
            />
            <button
              type={showPassword? "hide":"show"}
              className="signup-show-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
