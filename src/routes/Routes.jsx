
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Pages/Layouts/Main";
import NotFound from "../Pages/NotFound/NotFound";
import Register from "../Pages/Auth.jsx/Register";
import Login from "../Pages/Auth.jsx/Login";
import YogaClasses from "../Pages/Home/Pages/YogaClasses";
import YogaInstructor from "../Pages/Home/Pages/YogaInstructor";
import PrivateRoutes from "./PrivateRoute";
import DashBoard from "../Pages/DashBoard/DashBoard";
import MyCart from "../Pages/DashBoard/MyCart";
import Payment from "../Pages/DashBoard/Payment/Payment";
import PaymentHistory from "../Pages/DashBoard/Payment/PaymentHistory";
import AllUser from "../Pages/DashBoard/AllUsers/AllUser";
import AddCourse from "../Pages/DashBoard/AddCourse/AddCourse";
import AllStudents from "../Pages/DashBoard/AllStudents/AllStudents";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "instructors",
        element: <YogaInstructor />,
      },
      {
        path: "classes",
        element: <YogaClasses />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <DashBoard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "my-cart",
        element: (
          <PrivateRoutes>
            <MyCart />
          </PrivateRoutes>
        ),
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "add-course",
        element: <AddCourse />,
      },
      {
        path: "all-students",
        element: <AllStudents/>,
      },
      {
        path: "all-users",
        element: <AllUser />,
      },
    ],
  },
]);
export default router;
