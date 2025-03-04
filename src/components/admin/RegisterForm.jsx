"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/register", {
        username,
        email,
        password,
      });

      if (response.error) {
        setError("User already exists!");
        return;
      }

      setUsername("");
      setEmail("");
      setPassword("");

      //router.push("/login");
    } catch (error) {
      console.error("Registration failed", error);
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-text text-center">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-text">
              Username
            </label>
            <input
              type="text"
              id="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring focus:border-teal"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-text">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring focus:border-teal"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-text">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring focus:border-teal"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition-colors duration-300"
          >
            Register
          </button>
          {error && (
            <div className="mt-2 py-1 px-2 bg-red text-white text-sm w-fit rounded-md">
              {error}
            </div>
          )}
        </form>
        <p className="mt-6 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-teal hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
