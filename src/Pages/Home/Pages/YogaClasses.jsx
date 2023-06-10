import React, { useContext } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import Lottie from "react-lottie";
import meditation from "../../../../public/student-meditation.json";
import { AuthContext } from "../../../provider/AuthProvider";

const YogaClasses = () => {
  const {yogaClasses,loading} = useContext(AuthContext);
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: meditation,
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
            <div className="relative w-64 mx-auto mb-10">
              <div className="rounded-full overflow-hidden shadow-md mx-auto">
                <img
                  src={yogaClass?.image}
                  alt="YogaClass"
                  className="w-full h-[250px]"
                />
              </div>
              <div className="mt-4 bg-white p-4 rounded-b-lg shadow-md hover:bg-gray-600 transition-colors duration-300 text-black">
                <h3 className="text-xl font-semibold">
                  Instructor Name: {yogaClass?.name}
                </h3>
                <p className="">Class: {yogaClass?.subject} Taka</p>
                <p className="">Available seats: {yogaClass?.seats} </p>
                <p className="">Price: ${yogaClass?.price} </p>
                <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
                  submit
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
