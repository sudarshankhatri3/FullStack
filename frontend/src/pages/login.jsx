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
          <h3 className="login__title">Login</h3>
        </div>

        <form className="login__form" onSubmit={loginUser}>
          <div className="login__field">
            <input className="login__input" type="email" placeholder="Email" />
          </div>

          <div className="login__field login__password-field">
            <input
              className="login__input"
              type={showPassword ? "text" : "password"}
              placeholder="Password..."
            />

            <button
              type="button"
              className="login__toggle-btn"
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
