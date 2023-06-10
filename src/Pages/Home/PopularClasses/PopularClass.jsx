import React, { useContext, useEffect, useState } from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import Marquee from "react-fast-marquee";
import Lottie from "lottie-react-web";
import loader from "../../../../public/loader.json";
import { AuthContext } from '../../../provider/AuthProvider';


const PopularClass = () => {
    const {data,loading} = useContext(AuthContext);

    return (
      <div>
        <SectionTitle
          title="Popular Classes"
          subTitle="All About Yoga and Meditation School Classes"
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
          <Marquee>
            <div className="flex gap-4 ml-4">
              {data.map((item) => (
                <div
                  className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden"
                  key={item._id}
                >
                  <img
                    src={item?.image}
                    alt="Card Image"
                    className="object-cover w-full h-52"
                  />
                  <div className="p-6">
                    <h2 className="font-semibold mb-2">
                      Class Name: {item?.name}
                    </h2>
                    <p className="font-semibold">
                      How Many Students: {item?.students}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        )}
      </div>
    );
};

export default PopularClass;