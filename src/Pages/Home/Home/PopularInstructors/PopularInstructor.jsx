import React, { useContext } from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { AuthContext } from "../../../../provider/AuthProvider";
import Lottie from "lottie-react-web";
import loader from "../../../../../public/loader.json";

const PopularInstructor = () => {
  const {instructors,loading} = useContext(AuthContext);
  return (
    <div>
      <SectionTitle
        title="Popular Instructor"
        subTitle="All About Yoga and Meditation School Teachers"
      />
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
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        {instructors.map((instructor) => (
          <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col">
            <div className="card-header">
              <h2 className="text-2xl font-bold my-2 ">Name: {instructor?.name}</h2>
            </div>
            <div className="card-content flex-grow">
              <img
                src={instructor?.image}
                className="w-full h-[350px] rounded-lg"
              />
              <p className="my-2 text-2xl">Instructor: {instructor?.subject}</p>
              <p className="my-2 text-2xl">Students: {instructor?.students}</p>
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default PopularInstructor;
