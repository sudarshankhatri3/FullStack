// import "../styles/pagesCss/signup.css"
import "../app.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginPage from "./login";

export default function SignPage() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password1: "",
    password2: "",
    role: "",
    privacy_policy: false,
  });
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [agreed, setAgreed] = useState(false);

  console.log(formData.privacy_policy);

  async function signUp(e) {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to privacy and policy");
      return;
    }
    console.log(formData);
    console.log(JSON.stringify(formData))
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data=await response.json()
      console.log(data)
      if (!response.ok) {
        alert("Error: " + JSON.stringify(data));
      }
      alert("Signup sucessfully");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="flex flex-col items-center justify-center px-4 py-8 mx-auto min-h-screen  rounded-xl-x  shadow-lg shadow-blue-500/50">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          SwallBaby
        </a>

        {/* Card */}
        <div className="w-full bg-white  sm:max-w-lg">
          <div className="p-6 sm:p-8 space-y-5">
            <h1 className="text-2xl font-bold text-gray-900">
              Create an account
            </h1>

            <form onSubmit={signUp} className="space-y-4 flex flex-col gap-4">
              {/* First & Last Name */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-1/2">
                  <label className="block mb-1.5 text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    value={formData.first_name.trim()}
                    onChange={(e) =>
                      setFormData({ ...formData, first_name: e.target.value })
                    }
                    className="bg-gray-50 border h-15 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full px-7 py-90 outline-none transition"
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label className="block mb-1.5 text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    value={formData.last_name.trim()}
                    onChange={(e) =>
                      setFormData({ ...formData, last_name: e.target.value })
                    }
                    className="bg-gray-50 border  h-15 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1.5 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email.trim()}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-gray-50 border  h-15 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none transition"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block mb-1.5 text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword1 ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password1}
                    onChange={(e) =>
                      setFormData({ ...formData, password1: e.target.value })
                    }
                    className="bg-gray-50 border  h-15 w-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-16 outline-none transition"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword1(!showPassword1)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-blue-600 hover:text-blue-800 transition"
                  >
                    {showPassword1 ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block mb-1.5 text-sm font-medium text-gray-700">
                  Confirm password
                </label>
                <div className="relative">
                  <input
                    type={showPassword2 ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password2}
                    onChange={(e) =>
                      setFormData({ ...formData, password2: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-16 outline-none transition"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword2(!showPassword2)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-blue-600 hover:text-blue-800 transition"
                  >
                    {showPassword2 ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Role Select */}
              <div>
                <label className="block mb-1.5 text-sm font-medium text-gray-700">
                  Role
                </label>
                <select
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none transition"
                >
                  <option value="" disabled>
                    Select role
                  </option>
                  <option value="VENDOR">Vendor</option>
                  <option value="CUSTOMER">Customer</option>
                </select>
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-2.5">
                <input
                  type="checkbox"
                  checked={agreed}
                  value={agreed}
                  onChange={(e) => {
                    setAgreed(e.target.checked);
                    setFormData({
                      ...formData,
                      privacy_policy: e.target.checked,
                    });
                  }}
                  className="mt-0.5 w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-2 focus:ring-blue-400 accent-blue-600 cursor-pointer flex-shrink-0"
                  required
                />
                <label className="text-sm text-gray-500 leading-snug">
                  I agree with{" "}
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    privacy
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    policy
                  </a>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none font-semibold rounded-lg text-sm px-5 py-3 text-center transition-colors duration-200"
              >
                Create an account
              </button>

              {/* Login link */}
              <p className="text-sm text-center text-gray-500">
                Already have an account? {<Link to="/login">Login</Link>}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
