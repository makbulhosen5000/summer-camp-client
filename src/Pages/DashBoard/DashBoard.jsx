import React from "react";
import { FaBars, FaCartPlus, FaHome, FaMoneyCheckAlt, FaUserAlt, FaUtensilSpoon } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";



const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  //TODO:: admin data will come from database
  //const isAdmin = true;
  //const isInstructor = false;

  return (
    <div className="flex min-h-screen">
      {/* <!-- Sidebar --> */}
      <aside className="bg-gray-800 text-white w-64">
        <nav className="mt-6">
          {isAdmin ? (
            <ul className="space-y-1">
              <li>
                <NavLink className="flex items-center px-6 py-2 hover:bg-gray-700">
                  <FaBars />
                  <div className="ml-5">Admin Dashboard</div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="flex items-center px-6 py-2 hover:bg-gray-700"
                >
                  <FaHome />
                  <div className="ml-5">Home</div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/my-cart"
                  className="flex items-center px-6 py-2 hover:bg-gray-700"
                >
                  <FaCartPlus />
                  <div className="ml-5">Cart Store</div>
                  <span className="badge ml-4">+{cart?.length || 0}</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/payment-history"
                  className="flex items-center px-6 py-2 hover:bg-gray-700"
                >
                  <FaMoneyCheckAlt />
                  <div className="ml-5">Payment History </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/all-users"
                  className="flex items-center px-6 py-2 hover:bg-gray-700"
                >
                  <FaUserAlt />
                  <div className="ml-5">Users</div>
                </NavLink>
              </li>
            </ul>
          ) : isInstructor ? (
            <ul className="space-y-1">
              <li>
                <NavLink className="flex items-center px-6 py-2 hover:bg-gray-700">
                  <FaBars />
                  <div className="ml-5">Instructor Dashboard</div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="flex items-center px-6 py-2 hover:bg-gray-700"
                >
                  <FaHome />
                  <div className="ml-5">Home</div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/add-item"
                  className="flex items-center px-6 py-2 hover:bg-gray-700"
                >
                  <FaUtensilSpoon />
                  <div className="ml-5">Add Course</div>
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul className="space-y-1">
              <li>
                <NavLink className="flex items-center px-6 py-2 hover:bg-gray-700">
                  <FaBars />
                  <div className="ml-5">User Dashboard</div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="flex items-center px-6 py-2 hover:bg-gray-700"
                >
                  <FaHome />
                  <div className="ml-5">Home</div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/my-cart"
                  className="flex items-center px-6 py-2 hover:bg-gray-700"
                >
                  <FaCartPlus />
                  <div className="ml-5">Cart Store</div>
                  <span className="badge ml-4">+{cart?.length || 0}</span>
                </NavLink>
              </li>
            </ul>
          )}
        </nav>
      </aside>

      {/* <!-- Main Content --> */}
      <main className="flex-1">
        <header className="bg-gray-600  shadow p-4 text-white">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </header>

        <div className="p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
