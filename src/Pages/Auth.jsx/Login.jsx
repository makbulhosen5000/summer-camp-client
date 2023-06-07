import React from "react";
import img from "../../assets/slider/a.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaGoogle } from "react-icons/fa";
const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Helmet>
        <title>Summer Camp || Login</title>
      </Helmet>
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <div className="mb-4">
          <img
            src={img}
            alt="Registration Image"
            className="mx-auto h-16 rounded-full"
          />
        </div>
        <form>
          <div className="mb-4">
            <label
              for="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              for="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold">
              Have a Account?
              <Link to="/register" className="text-yellow-600 ">
                {" "}
                Register here
              </Link>
            </span>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </div>
          <div className="divider">OR</div>
          <div className="text-center">
            <button className="btn btn-circle bg-yellow-500">
              <FaGoogle />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
