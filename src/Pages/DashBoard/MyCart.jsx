import React from "react";
import useCart from "../../Hooks/useCart";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import paymentAnimation from './../../../public/payment-lottie-animation.json';
import Lottie from "lottie-react-web";
import { Link } from "react-router-dom";


const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  // for delete Courses
  const cartDeleteHandler = (item) => {
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
        console.log("delete");
        fetch(`http://localhost:5000/carts/${item?._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
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
        <title>Bistro Boss || Total Cart</title>
      </Helmet>
      <div className="flex text-center">
        <div className="bg-yellow-600 p-20 w-1/2">
          <h1>Total Item:{cart.length || 0}</h1>
        </div>
        <div className="bg-yellow-300 p-20 w-1/2">
          <h1>Total Amount : ${total || 0}</h1>
          <Link to="/dashboard/payment">
            <button className="btn btn-outline">
              <Lottie
                style={{ height: "50px", width: "50px" }}
                options={{
                  animationData: paymentAnimation,
                  loop: true,
                  autoplay: true,
                }}
              />
              Payment
            </button>
          </Link>
        </div>
      </div>
      <table className="table">
        <thead className="bg-red-200">
          <tr>
            <th>#</th>
            <th>Instructor Image</th>
            <th>Instructor Name</th>
            <th>Class Name</th>
            <th>Available Seat</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
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
                  onClick={() => cartDeleteHandler(item)}
                  className="btn btn-ghost btn-xs bg-red-600 btn-sm text-white"
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCart;
