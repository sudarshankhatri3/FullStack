import "../styles/componentCss/signup.css";
import { useState, useEffect } from "react";

export default function SignPage() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password1: "",
    password2: "",
    role: "",
  });
  const [showPassword1,setShowPassword1]=useState(false)
  const [showPassword2,setShowPassword2]=useState(false)
  const [agreed,setAgreed]=useState(false)

  console.log(formData);

  function changeHandler() {}

  async function signUp() {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        alert("Response not found");
      }
      alert("Signup sucessfully");
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(()=>{
  //     signUp()
  // },[])

  const styles = {};

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h2 className="signup-title">Sign Up</h2>
        <form className="signup-form" onSubmit={signUp}>
          {/* First & Last Name Row */}
          <div className="signup-row">
            <input
              className="signup-input"
              type="text"
              placeholder="First Name"
              value={formData.first_name}
              onChange={(e) =>
                setFormData({ ...formData, first_name: e.target.value })
              }
            />
            <input
              className="signup-input"
              type="text"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={(e) =>
                setFormData({ ...formData, last_name: e.target.value })
              }
            />
          </div>

          {/* Email */}
          <div className="signup-input-wrapper">
            <input
              className="signup-input signup-input--full"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          {/* Password */}
          <div className="signup-input-wrapper">
            <input
              className="signup-input signup-input--full signup-input--padded"
              type={showPassword1 ? "text" : "password"}
              placeholder="Password"
              value={formData.password1}
              onChange={(e) =>
                setFormData({ ...formData, password1: e.target.value })
              }
            />
            <button
              type="button"
              className="signup-show-btn"
              onClick={() => setShowPassword1(!showPassword1)}
            >
              {showPassword1 ? "Hide" : "Show"}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="signup-input-wrapper">
            <input
              className="signup-input signup-input--full signup-input--padded"
              type={showPassword2 ? "text" : "password"}
              placeholder="Confirm Password"
              value={formData.password2}
              onChange={(e) =>
                setFormData({ ...formData, password2: e.target.value })
              }
            />
            <button
              type="button"
              className="signup-show-btn"
              onClick={() => setShowPassword2(!showPassword2)}
            >
              {showPassword2 ? "Hide" : "Show"}
            </button>
          </div>

          {/* Agree Checkbox */}
          <div className="signup-check-row">
            <input
              type="checkbox"
              className="signup-checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span className="signup-check-label">
              I Agree with{" "}
              <a href="#" className="signup-link">
                privacy
              </a>{" "}
              and{" "}
              <a href="#" className="signup-link">
                policy
              </a>
            </span>
          </div>

          <button type="submit" className="signup-submit-btn">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
