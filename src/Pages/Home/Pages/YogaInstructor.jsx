import React, { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import Lottie from "react-lottie";
import meditation from "../../../../public/meditation.json";

const YogaInstructor = () => {
      const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: meditation,
      };
  const [yogaInstructors, setYogaInstructors] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/popular-instructor")
        .then((res) => res.json())
        .then((data) => setYogaInstructors(data))
        .catch((error) => console.error(error));
    }, 4000);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Summer Camp || Yoga Instructor</title>
      </Helmet>
      <SectionTitle
        title="Yoga Instructor"
        subTitle="All About Yoga and Meditation Instructor"
      />
      <Lottie options={defaultOptions} />
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        // data-aos="fade-up"
        // data-aos-anchor-placement="bottom-bottom"
      >
        {yogaInstructors.map((yogaInstructor) => (
          <div className="card w-96 bg-base-100 shadow-xl image-full mx-auto mb-10">
            <figure>
              <img src={yogaInstructor?.image} alt="Yoga Instructor" />
            </figure>
            <div className="card-body">
              <p>Name: {yogaInstructor?.name}</p>
              <p>Emil: {yogaInstructor?.email}</p>
              <p>Subject: {yogaInstructor?.subject}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YogaInstructor;
