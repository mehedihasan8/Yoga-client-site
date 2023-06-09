import { FaClinicMedical, FaGraduationCap, FaHome } from "react-icons/fa";
import { AiOutlinePlusCircle, AiOutlineUsergroupAdd } from "react-icons/ai";
import {
  RiBook2Line,
  RiCalendar2Line,
  RiCheckDoubleLine,
  RiCheckboxMultipleLine,
  RiUserSettingsLine,
} from "react-icons/ri";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Dashboard = () => {
  //   const [card] = useCard();
  const isAdmin = false;
  const inInstractor = true;
  const { user } = useAuth();
  //   const isAdmin = admin[0];

  //   console.log(isAdmin);

  return (
    <div className="drawer lg:drawer-open  ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center">
        <div className="w-full">
          <Outlet></Outlet>
        </div>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#3173de] text-white">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu p-4 w-80">
          {isAdmin && user && !inInstractor && (
            <>
              <li>
                <Link to="/dashbord">
                  <FaClinicMedical /> Admin Home
                </Link>
              </li>
              <li>
                <NavLink to="/dashbord/">
                  <RiCalendar2Line /> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashbord/manageuser">
                  <RiUserSettingsLine />
                  Manage Users
                </NavLink>
              </li>
            </>
          )}

          {inInstractor && user && !isAdmin && (
            <>
              <li>
                <Link to="/dashbord">
                  <FaClinicMedical />
                  Instractor Home
                </Link>
              </li>
              <li>
                <NavLink to="/dashbord/addclass">
                  <AiOutlinePlusCircle />
                  Add a Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashbord/myclass">
                  <RiBook2Line />
                  My Classes
                </NavLink>
              </li>
            </>
          )}

          {user && !isAdmin && !inInstractor && (
            <>
              <li>
                <Link to="/dashbord">
                  <FaClinicMedical /> User Home
                </Link>
              </li>
              <li>
                <NavLink to="/deshbord/allusers">
                  <RiCheckboxMultipleLine />
                  My Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/deshbord/allusers">
                  <RiCheckDoubleLine />
                  My Enrolled Classes
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/instractor">
              {" "}
              <FaGraduationCap /> instractor
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes">
              {" "}
              <AiOutlineUsergroupAdd /> Class
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
