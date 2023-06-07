
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Pages/Layouts/Main";
import NotFound from "../Pages/NotFound/NotFound";
import Register from "../Pages/Auth.jsx/Register";
import Login from "../Pages/Auth.jsx/Login";

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
        path: "login",
        element: <Login/>,
      },
      {
        path: "register",
        element: <Register/>,
      },
    ],
  },
]);
export default router;
