import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Sharied/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      main
    </div>
  );
};

export default Main;
