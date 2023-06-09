import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Home/Register/Register";
import Login from "../Pages/Home/Login/Login";
import Dashboard from "../LayOut/Dashboard";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";
import AddClasses from "../Pages/Dashboard/AddClasses/AddClasses";
import Classess from "../Pages/Classes/Classess";
import Instractor from "../Pages/Instractor/Instractor";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";

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
        element: <Instractor />,
      },
      {
        path: "/classes",
        element: <Classess />,
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
      {
        path: "addclass",
        element: <AddClasses />,
      },
      {
        path: "myclass",
        element: <MyClasses />,
      },
    ],
  },
]);

export default router;
