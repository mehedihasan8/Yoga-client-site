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
import Error from "../Pages/Sharied/Error/Error";
import ManaeClasses from "../Pages/Dashboard/MangeClasses/ManaeClasses";
import MySelectedClasses from "../Pages/Dashboard/MySelectedClasses/MySelectedClasses";
import Payment from "../Pages/Dashboard/MySelectedClasses/Payment";
import MyEnrolMentClasses from "../Pages/Dashboard/MyEnrolMentClasses/MyEnrolMentClasses";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminRoutes from "./AdminRoutes";
import InstractorRoutes from "./InstractorRoutes";
import PrivetRoues from "./PrivetRoues";
import ClassUpDate from "../Pages/Dashboard/ClassUpdate/ClassUpDate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
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
    element: (
      <PrivetRoues>
        <Dashboard />
      </PrivetRoues>
    ),
    // errorElement: <Error />,
    children: [
      {
        path: "manageuser",
        element: (
          <AdminRoutes>
            {" "}
            <ManageUser />
          </AdminRoutes>
        ),
      },
      {
        path: "manageclasses",
        element: (
          <AdminRoutes>
            <ManaeClasses />
          </AdminRoutes>
        ),
      },
      {
        path: "addclass",
        element: (
          <InstractorRoutes>
            <AddClasses />
          </InstractorRoutes>
        ),
      },
      {
        path: "myclass",
        element: (
          <InstractorRoutes>
            <MyClasses />
          </InstractorRoutes>
        ),
      },
      {
        path: "MySelectedClasses",
        element: <MySelectedClasses />,
      },
      {
        path: "update",
        element: <ClassUpDate />,
      },
      {
        path: "MyEnrolMentClasses",
        element: <MyEnrolMentClasses />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
    ],
  },
]);

export default router;
