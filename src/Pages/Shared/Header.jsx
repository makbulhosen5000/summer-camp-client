import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../../Hooks/useCart";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [cart] = useCart();

    const logoutHandler = () => {
      logOut(() => {})
        .then({})
        .catch((error) => console.log(error));
    };



    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const navItem = (
      <>
        <Link
          to="/"
          className={`text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
            location.pathname === "/"
              ? "border border-yellow-600 text-white"
              : "text-gray-300 hover:text-yellow-600"
          }`}
        >
          Home
        </Link>
        <Link
          to="/instructors"
          className={`text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
            location.pathname === "/instructors"
              ? " border border-yellow-600 text-white"
              : "text-gray-300 hover:text-yellow-600"
          }`}
        >
          Instructors
        </Link>
        <Link
          to="/classes"
          className={`text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
            location.pathname === "/classes"
              ? "border border-yellow-600  text-white"
              : "text-gray-300 hover:text-yellow-600"
          }`}
        >
          Classes
        </Link>
        {user ? (
          <>
            <Link
              onClick={logoutHandler}
              className={`text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === ""
                  ? "border border-yellow-600  text-white"
                  : "text-gray-300 hover:text-yellow-600"
              }`}
            >
              Logout
            </Link>
            <img
              src={user?.photoURL}
              alt=""
              className="rounded-full w-5 h-5"
              title={user?.displayName}
            />
          </>
        ) : (
          <Link
            to="/login"
            className={`text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
              location.pathname === "/login"
                ? "border border-yellow-600  text-white"
                : "text-gray-300 hover:text-yellow-600"
            }`}
          >
            Login
          </Link>
        )}
          <Link
            to="/dashboard/my-cart"
            className="flex text-white hover:text-yellow-600"
          >
            <FaCartPlus className="mt-3" />
            <span>+{cart.length || 0}</span>
          </Link>

      </>
    );
  return (
    <>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <div className="flex-shrink-0">
              <Link to="/">
                <h1 className="text-white font-bold text-3xl">
                  <span className=" text-yellow-600">Summer</span> Camp
                </h1>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItem}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              >
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
            <div className="px-2 pt-2 pb-3 sm:px-3">
              {navItem}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
