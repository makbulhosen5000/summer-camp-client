import React, { useContext } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

import meditation from "../../../../public/student-meditation.json";
import loader from "../../../../public/loader.json";
import { AuthContext } from "../../../provider/AuthProvider";
import Lottie from "lottie-react-web";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../Hooks/useCart";

const YogaClasses = () => {
  const {yogaClasses,user,loading} = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: meditation,
  };

  const handleAddToCart = (yogaClass)=> {
    const { _id,name, image, subject, seats, price } = yogaClass;

    if (user && user.email) {
      const cartItem = { orderId:  _id,name, image, subject,seats,price, email: user.email };

      fetch('http://localhost:5000/carts', {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          refetch();
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Yoga Course Added Successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to order the Food?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Summer Camp || Yoga Class</title>
      </Helmet>
      <SectionTitle
        title="Yoga and Meditation Class"
        subTitle="All About Yoga and Meditation Students"
      />
      <div className="mt-[-50px]">
        <Lottie options={defaultOptions} />
      </div>
      {loading ? (
        <Lottie
          style={{ height: "250px", width: "250px" }}
          options={{
            animationData: loader,
            loop: true,
            autoplay: true,
          }}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {yogaClasses.map((yogaClass) => (
            <div className="relative w-64 mx-auto mb-10" key={yogaClass._id}>
              <div className="rounded-full overflow-hidden shadow-md mx-auto">
                <img
                  src={yogaClass ? yogaClass?.image:"Not Found"}
                  alt="YogaClass"
                  className="w-full h-[250px]"
                />
              </div>
              <div
                className={
                  yogaClass?.seats === 0
                    ? "bg-red-600"
                    : "bg-white p-4 rounded-b-lg shadow-md hover:bg-gray-600 transition-colors duration-300 text-black"
                }
              >
                <h3 className="text-xl font-semibold">
                  Instructor Name: {yogaClass?.name}
                </h3>
                <p className="">Class: {yogaClass?.subject}</p>
                <p className="">Available seats: {yogaClass?.seats} </p>
                <p className="">Price: ${yogaClass?.price} </p>
                <button
                  onClick={() => handleAddToCart(yogaClass)}
                  disabled={yogaClass?.seats === 0 ? true : false}
                  className="btn btn-outline-primary bg-black text-yellow-600"
                >
                  Buy Course
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YogaClasses;
