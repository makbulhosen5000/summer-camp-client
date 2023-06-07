import React from 'react';
import img from '../../assets/slider/a.jpg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Helmet>
          <title>Summer Camp || Register</title>
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
                for="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="photoUrl"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter your PhotoUrl"
                required
              />
            </div>
            <div className="mb-4">
              <label
                for="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
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
            <div className="flex justify-between">
              <span className="font-bold">
                Have a Account?
                <Link to="/login" className="text-yellow-600 ">
                  {" "}
                  Login here
                </Link>
              </span>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Register;