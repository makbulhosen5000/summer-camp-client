import React from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import useCart from '../../../Hooks/useCart';
import { Helmet } from 'react-helmet-async';

const PaymentHistory = () => {
    const [cart] = useCart();
    return (
      <div className="overflow-x-auto">
        <Helmet>
          <title>Bistro Boss || Payment History</title>
        </Helmet>
        <SectionTitle
          title="Payment History"
          subTitle="All About User Payment History"
        />

        <div className="flex text-center"></div>
        <table className="table">
          <thead className="bg-red-200">
            <tr>
              <th>#</th>
              <th>Instructor Image</th>
              <th>Instructor Name</th>
              <th>Class Name</th>
              <th>Available Seat</th>
              <th>Price</th>
              <th>Payment Status</th>
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
                  <button className="btn btn-ghost btn-xs bg-red-600 btn-sm text-white">
                    {item === 0?'completed':'incomplete'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default PaymentHistory;