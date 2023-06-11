import React from "react";
import useCart from "../../Hooks/useCart";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const cartDeleteHandler = () =>{

  }


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
        </div>
      </div>
      <table className="table">
        <thead>
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
              <td>{item?.price}</td>
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
