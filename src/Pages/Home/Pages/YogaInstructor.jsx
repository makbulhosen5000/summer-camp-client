import React, { useContext } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import Lottie from "react-lottie";
import meditation from "../../../../public/meditation.json";
import { AuthContext } from "../../../provider/AuthProvider";
import loader from "../../../../public/loader.json";


const YogaInstructor = () => {
      const {yogaInstructors,loading} = useContext(AuthContext);
      
      const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: meditation,
      };

  return (
    <div>
      <Helmet>
        <title>Summer Camp || Yoga Instructor</title>
      </Helmet>
      <SectionTitle
        title="Yoga Instructor"
        subTitle="All About Yoga and Meditation Instructor"
      />

      <div className="mt-[-90px]">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {yogaInstructors.map((yogaInstructor) => (
            <div className="card w-96 bg-base-100 shadow-xl image-full mx-auto mb-10">
              <figure>
                <img src={yogaInstructor?.image} alt="Yoga Instructor" />
              </figure>
              <div className="card-body">
                <p>Name: {yogaInstructor?.name}</p>
                <p>Emil: {yogaInstructor?.email}</p>
                <p>Subject: {yogaInstructor?.subject}</p>
              </div>
            </div>
          ))}
        </div>
        )}
    </div>
  );
};

export default YogaInstructor;
