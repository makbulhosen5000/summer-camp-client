import React, { useEffect, useState } from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import Marquee from "react-fast-marquee";


const PopularClass = () => {
   const [data, setData] = useState([]);
    const [loading,setLoading] = useState(true);

     useEffect(() => {
       setTimeout(() => {
         fetch("popular-class.json")
           .then((res) => res.json())
           .then((data) => setData(data))
           .catch((error) => console.error(error));
         setLoading(false);
       }, 3000);
     }, []);

    return (
      <>
        <SectionTitle
          title="Popular Classes"
          subTitle="All About Yoga and Meditation School"
        />
        {/*        <div key={item.id}>{item.name}</div> */}
        <div className="flex items-center justify-center min-h-screen bg-gray-100 gap-4">
          {data.map((item) => (
            <Marquee>
              <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={item?.image}
                  alt="Card Image"
                  className="object-cover w-full h-52"
                />
                <div className="p-6">
                  <h2 className="font-semibold mb-2">
                    Class Name: {item?.name}
                  </h2>
                  <p className="font-semibold mb-2">
                    How Many Students: {item?.students}
                  </p>
                </div>
              </div>
            </Marquee>
          ))}
        </div>
      </>
    );
};

export default PopularClass;