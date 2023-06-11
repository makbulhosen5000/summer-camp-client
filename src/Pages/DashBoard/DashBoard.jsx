import React from "react";
import { FaBars, FaPlus } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* <!-- Sidebar --> */}
      <aside className="bg-gray-800 text-white w-64">
        <nav className="mt-6">
          <ul className="space-y-1">
            <li>
              <a
                href="#"
                className="flex items-center px-6 py-2 hover:bg-gray-700"
              >
                <FaBars />
                <div className="ml-5">Dashboard</div>
              </a>
            </li>
            <Link
              to="/"
              className="flex items-center px-6 py-2 hover:bg-gray-700"
            >
              <FaPlus />
              <div className="ml-5">Home</div>
            </Link>
            <Link className="flex items-center px-6 py-2 hover:bg-gray-700">
              <FaPlus />
              <div className="ml-5">User</div>
            </Link>
          </ul>
        </nav>
      </aside>

      {/* <!-- Main Content --> */}
      <main className="flex-1">
        <header className="bg-gray-600  shadow p-4 text-white">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </header>

        <div classNameName="p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
