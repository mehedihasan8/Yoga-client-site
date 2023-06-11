import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Sharied/NavBar/NavBar";
import Footer from "../Pages/Sharied/Footer/Footer";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
