import React, { useContext } from "react";
import img from "../../assets/slider/a.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";
  const { signInWithGoogle } = useContext(AuthContext);

  // sign in with google
  const loginWithGoogle = () => {

    signInWithGoogle().then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      const saveUser = {
        name: loggedUser.displayName,
        email: loggedUser.email,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };

    const handleLogin = (even) => {
      even.preventDefault();
      const form = even.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      signIn(email, password).then((result) => {
        const user = result.user;
        console.log(user);
         Swal.fire({
           position: "top-end",
           icon: "success",
           title: "Login Successfully",
           showConfirmButton: false,
           timer: 1500,
         });
        navigate(from, { replace: true });
      });
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Helmet>
        <title>Summer Camp || Login</title>
      </Helmet>
      <div className="bg-white my-20 p-8 shadow-lg rounded-lg w-full max-w-md">
        <div className="mb-4">
          <img
            src={img}
            alt="Registration Image"
            className="mx-auto h-16 rounded-full"
          />
        </div>
        <form onSubmit={handleLogin}>
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
            <button
              onClick={loginWithGoogle}
              className="btn btn-circle bg-yellow-500"
            >
              <FaGoogle />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
