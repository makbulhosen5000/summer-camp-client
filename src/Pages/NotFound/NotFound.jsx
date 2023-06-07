import React from "react";
import notFound from "../../assets/not-found.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
 
  return (
    <div className="flex items-center justify-center h-screen">
      <img src={notFound} alt="" className="w-[25%]" />
      <div className=" flex-col">
        <h1 className="text-3xl pb-3">Page Not Found</h1>
        <Link to="/" className="bg-yellow-500 p-2 rounded-md">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
