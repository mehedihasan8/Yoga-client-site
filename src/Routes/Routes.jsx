import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Home/Register/Register";
import Login from "../Pages/Home/Login/Login";
import Dashboard from "../LayOut/Dashboard";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";
import OurInstractor from "../Pages/OurInstractor/OurInstractor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/instractor",
        element: <OurInstractor />,
      },
    ],
  },
  {
    path: "/dashbord",
    element: <Dashboard />,
    children: [
      {
        path: "manageuser",
        element: <ManageUser />,
      },
    ],
  },
]);

export default router;
