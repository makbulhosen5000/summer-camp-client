import Home from "../Pages/Home/Home/Home";
import Main from "../Pages/Layouts/Main";
import NotFound from "../Pages/NotFound/NotFound";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([

    {
        path:'/',
        element:<Main/>,
        errorElement:<NotFound/>,
        children:[
            {
              path:'/',
              element:<Home/>
            }
        ]
        
    }

])
export default router;

