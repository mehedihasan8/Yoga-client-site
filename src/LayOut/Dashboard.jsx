import {
  FaBars,
  FaBook,
  FaCalendarAlt,
  FaClinicMedical,
  FaFirstOrder,
  FaHome,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";

import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  //   const [card] = useCard();
  const isAdmin = false;
  //   const isAdmin = admin[0];

  //   console.log(isAdmin);

  return (
    <div className="drawer lg:drawer-open">
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
      <div className="drawer-side bg-[#3173de]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaClinicMedical /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/deshbord/additem">
                  <FaUtensils /> Add Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/deshbord/manageitems">
                  <FaWallet></FaWallet>Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaBook />
                  Manage bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/deshbord/allusers">
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservations">
                  <FaCalendarAlt></FaCalendarAlt> Reservations
                </NavLink>
              </li>
              <li>
                <NavLink to="/deshbord/payment">
                  <FaWallet></FaWallet> Payment
                </NavLink>
              </li>
              <li>
                <NavLink to="/deshbord/mycard">
                  <FaShoppingCart></FaShoppingCart> My Cart
                  <span className="badge inl badge-secondary">
                    {/* +{card?.length || 0} */}
                  </span>
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
            <NavLink to="/menu">
              {" "}
              <FaBars /> Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaFirstOrder /> Order Food
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
