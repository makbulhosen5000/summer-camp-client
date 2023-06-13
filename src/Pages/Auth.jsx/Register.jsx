import React, { useContext } from 'react';
import img from '../../assets/slider/a.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {useForm} from "react-hook-form";
import Swal from "sweetalert2";
import Lottie from 'lottie-react-web';
import registerAnimation from '../../../public/register-animation.json';
import { AuthContext } from '../../provider/AuthProvider';


const Register = () => {
     const navigate = useNavigate();
     const {
       register,
       handleSubmit,
       reset,
       formState: { errors },
     } = useForm();
     const { createUser, updateUserProfile } = useContext(AuthContext);

     const onSubmit = (data) => {
       createUser(data.email, data.password).then((result) => {
         const loggedUser = result.user;
         console.log(loggedUser);
          updateUserProfile(data.name, data.photo);
          //updateUserProfile(data.user, data.name, data.photo);

         // for user manage
         const saveUser = { name: data.name, email: data.email };
         fetch("http://localhost:5000/users", {
           method: "POST",
           headers: {
             "content-type": "application/json",
           },
           body: JSON.stringify(saveUser),
         })
           .then((res) => res.json())
           .then((data) => {
             if (data.insertedId) {
               reset();
               navigate("/");
               Swal.fire({
                 position: "top-end",
                 icon: "success",
                 title: "Registration Successfully ",
                 showConfirmButton: false,
                 timer: 1500,
               });
             }
           });
       });
     };


    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Helmet>
          <title>Summer Camp || Register</title>
        </Helmet>
        <div className="bg-white my-20 p-8 shadow-lg rounded-lg w-full max-w-md">
          <div className="mb-4">
            <Lottie
              style={{ height: "250px", width: "250px" }}
              options={{
                animationData: registerAnimation,
                loop: true,
                autoplay: true,
              }}
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                for="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                PhotoUrl
              </label>
              <input
                type="text"
                id="name"
                name="photo"
                {...register("photo", { required: true })}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter your PhotoUrl"
                required
              />
              {errors.photo && <span>This field is required</span>}
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
                {...register("name", { required: true })}
                name="name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
                required
              />
              {errors.name && <span>This field is required</span>}
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
                {...register("email", { required: true })}
                name="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
              {errors.email && <span>This field is required</span>}
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
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                })}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
              {errors.password && (
                <span>
                  This field is required take 2 capital 2 small letter 1 number
                  2 spacial character{" "}
                </span>
              )}
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