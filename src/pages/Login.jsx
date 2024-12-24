import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false); // State to track admin login
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      if (isAdmin) {
        alert("Logged in as Admin successfully!");
        navigate("/admin-dashboard");
      } else {
        alert("Logged in successfully!");
        navigate("/dashboard"); 
      }
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-white shadow-lg rounded-md mt-16">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        {isAdmin ? "Admin Login" : "Login"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="admin-checkbox"
            className="mr-2"
            checked={isAdmin}
            onChange={() => setIsAdmin(!isAdmin)}
          />
          <label htmlFor="admin-checkbox" className="text-sm text-gray-700">
            Login as Admin
          </label>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-2 bg-[#4175B7] text-white rounded-md hover:bg-blue-500"
          >
            Login
          </button>
        </div>
      </form>
      <div className="mt-4 text-center">
        {!isAdmin && (
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-[#4175B7] hover:underline">
              Register here
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
