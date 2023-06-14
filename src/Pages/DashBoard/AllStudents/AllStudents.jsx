import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Lottie from "lottie-react-web";

const AllStudents = () => {
      const [students,setStudents] = useState(['']);
      const {loading} = useContext(AuthContext);


      useEffect(()=>{
        fetch("https://summer-camp-server-ecru.vercel.app/yoga-classes", {
          params: {
            sortBy: "name", 
            sortOrder: "asc",
          },
        })
          .then((res) => res.json())
          .then((data) => setStudents(data));
      },[])

      const handleSortByName = () => {
        const sortedItems = [...students].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setStudents(sortedItems);
      };

  // for delete Courses
  const studentDeleteHandler = (item) => {
    Swal.fire({
      title: `Are you sure  ${item.name} ?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://summer-camp-server-ecru.vercel.app/yoga-classes/${item?._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Cart Item has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <Helmet>
        <title>Summer Camp || All Students</title>
      </Helmet>
      <button onClick={handleSortByName} className="btn btn-outline mb-5">Order by Name</button>
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
        <table className="table">
          <thead className="bg-red-200">
            <tr>
              <th>#</th>
              <th>Student Image</th>
              <th>Student Name</th>
              <th>Class Name</th>
              <th>Available Seat</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item?.name}</td>
                <td>{item?.subject}</td>
                <td>{item?.seats}</td>
                <td>${item?.price}</td>
                <td>
                  <button
                    onClick={() => studentDeleteHandler(item)}
                    className="btn btn-ghost btn-xs bg-red-600 btn-sm text-white"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllStudents;
