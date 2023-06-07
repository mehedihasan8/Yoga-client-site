// import { Link, NavLink } from "react-router-dom";

import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

// import { NavLink } from "react-router-dom";

// import { useState } from "react";

const NavBar = () => {
  //   const [userClicked, setUserClicked] = useState(false);
  //   const [menuClicked, setMenuClicked] = useState(false);
  //   // const [user] = useAuthState(auth);
  const { user, logOut } = useAuth();
  console.log(user);
  // const activeLinkClasses = "text-gray-800";
  // const inactiveLinkClasses = "text-gray-300 hover:text-white";
  const handlogOut = () => {
    logOut();
  };
  return (
    <div className="navbar bg-base-100 shadow mx-0">
      <div className="flex-1">
        <Link to="/">
          <li className="btn btn-ghost normal-case text-xl ">daisyUI</li>
        </Link>
      </div>
      <div className="flex-none">
        {/* <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div> */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <div className="tooltip" data-tip="hello">
                <img
                  className="h-10 w-10 rounded-full"
                  src={user?.photoURL}
                  alt="photo"
                />
              </div>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Instructors
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Classes</a>
            </li>
            <li>
              <a> Dashboard </a>
            </li>
            {user ? (
              <li>
                <button onClick={handlogOut}>Logout</button>
              </li>
            ) : (
              <Link to="/login">
                <li>
                  <button>Login</button>
                </li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
    // <section className="bg-white shadow-md border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 sticky top-0 z-50">
    //   <div className="flex justify-evenly items-center mx-auto">
    //     {/------------------- logo ---------------------/}

    //     <div className="lg:w-[20%] w-[70%]">
    //       <Link to="/" className="inline mr-0 w-1/3">
    //         <span className="self-center font-extrabold text-xl whitespace-nowrap dark:text-white">
    //           {/* <img className="w-1/3" src={bagsq} alt="" /> */}
    //         </span>
    //       </Link>
    //     </div>
    //     <div className="flex items-center md:order-2">
    //       <button
    //         type="button"
    //         className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
    //         id="user-menu-button"
    //         aria-expanded="false"
    //         data-dropdown-toggle="dropdown"
    //       >
    //         <span className="sr-only">Open user menu</span>
    //         <img
    //           className="w-8 h-8 rounded-full"
    //           onClick={() => setUserClicked(!userClicked)}
    //           //   src={user?.photoURL ? user?.photoURL : userImage}
    //           alt=""
    //         />
    //       </button>

    //       {
    //         /--------------------------- user image navigation ------------------------------/
    //       }

    //       <div
    //         className={`z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 ${
    //           userClicked ? "flex" : "hidden"
    //         }`}
    //         id="dropdown"
    //         data-popper-reference-hidden=""
    //         data-popper-escaped=""
    //         data-popper-placement="top"
    //         style={{
    //           position: " absolute",
    //           top: "100%",
    //           right: "3%",
    //           margin: " 0px",
    //         }}
    //       >
    //         <div>
    //           {user && (
    //             <>
    //               <div className="py-3 px-4 z-50">
    //                 <span className="block text-sm text-gray-900 dark:text-white">
    //                   {/* {user?.displayName} */}
    //                 </span>
    //                 <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
    //                   {/* {user?.email} */}
    //                 </span>
    //               </div>
    //             </>
    //           )}
    //           <ul className="py-1" aria-labelledby="dropdown">
    //             <li>
    //               <NavLink
    //                 to="/dashboard"
    //                 className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
    //               >
    //                 Dashboard
    //               </NavLink>
    //             </li>
    //             {user ? (
    //               <li>
    //                 <NavLink
    //                   to="/login"
    //                   onClick={handleSignOut}
    //                   className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
    //                 >
    //                   Sign out
    //                 </NavLink>
    //               </li>
    //             ) : (
    //               <>
    //                 <li>
    //                   <NavLink
    //                     to="/register"
    //                     className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
    //                   >
    //                     Register
    //                   </NavLink>
    //                 </li>
    //                 <li>
    //                   <NavLink
    //                     to="/login"
    //                     className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
    //                   >
    //                     Login
    //                   </NavLink>
    //                 </li>
    //               </>
    //             )}
    //           </ul>
    //         </div>
    //       </div>
    //       <button
    //         data-collapse-toggle="mobile-menu-2"
    //         type="button"
    //         onClick={() => setMenuClicked(!menuClicked)}
    //         className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //         aria-controls="mobile-menu-2"
    //         aria-expanded="false"
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         {menuClicked ? (
    //           <svg
    //             className="w-6 h-6"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //               clipRule="evenodd"
    //             ></path>
    //           </svg>
    //         ) : (
    //           <svg
    //             className="w-6 h-6"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    //               clipRule="evenodd"
    //             ></path>
    //           </svg>
    //         )}
    //       </button>
    //     </div>

    //     {
    //       /--------------------------- Header navigation ------------------------------/
    //     }

    //     <div
    //       className={`${
    //         menuClicked ? "block absolute bg-white top-14" : "hidden"
    //       } justify-between items-center w-full md:flex md:w-auto md:order-1"
    //       id="mobile-menu-2 z-50 px-5 leading-9`}
    //     >
    //       <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
    //         <li>
    //           <NavLink
    //             to="/"
    //             className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#4fa9e3] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //             aria-current="page"
    //           >
    //             Home
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink
    //             to="/manageInventories"
    //             className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#4fa9e3] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //           >
    //             Manage Inventories
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink
    //             to="/addinventory"
    //             className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#4fa9e3] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //           >
    //             Add Inventory
    //           </NavLink>
    //         </li>
    //         {user && (
    //           <li>
    //             <NavLink
    //               to="/myitem"
    //               className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#4fa9e3] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //             >
    //               My Items
    //             </NavLink>
    //           </li>
    //         )}

    //         <li>
    //           <NavLink
    //             to="/blogs"
    //             className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#4fa9e3] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //           >
    //             Blogs
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink
    //             to="/about"
    //             className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#4fa9e3] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //           >
    //             About
    //           </NavLink>
    //         </li>
    //         {user ? (
    //           <li>
    //             <NavLink
    //               to="/login"
    //               onClick={handleSignOut}
    //               className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#4fa9e3] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //             >
    //               Sign out
    //             </NavLink>
    //           </li>
    //         ) : (
    //           <>
    //             <li>
    //               <NavLink
    //                 to="/register"
    //                 className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#4fa9e3] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //               >
    //                 Register
    //               </NavLink>
    //             </li>
    //             <li>
    //               <NavLink
    //                 to="/login"
    //                 className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#4fa9e3] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //               >
    //                 Login
    //               </NavLink>
    //             </li>
    //           </>
    //         )}
    //       </ul>
    //     </div>
    //   </div>
    // </section>
    // <nav className="bg-gray-800 py-4">
    //   <div className=" px-4">
    //     <div className="flex justify-between items-center">
    //       <div className="flex">
    //         <NavLink
    //           to="/"
    //           exact
    //           className="text-white text-xl font-bold"
    //           activeClassName=""
    //         >
    //           Website Name
    //         </NavLink>
    //       </div>

    //       <div className="flex items-center space-x-4">
    //         <input type="checkbox" id="menu-toggle" className="hidden" />
    //         <label
    //           htmlFor="menu-toggle"
    //           className="text-gray-300 cursor-pointer md:hidden"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             className="h-6 w-6"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 6h16M4 12h16M4 18h16"
    //             />
    //           </svg>
    //         </label>
    //         <div className="hidden md:flex items-center">
    //           <NavLink
    //             to="/"
    //             exact
    //             className={inactiveLinkClasses}
    //             activeClassName={activeLinkClasses}
    //           >
    //             Home
    //           </NavLink>
    //           <NavLink
    //             to="/instructors"
    //             className={inactiveLinkClasses}
    //             activeClassName={activeLinkClasses}
    //           >
    //             Instructors
    //           </NavLink>
    //           <NavLink
    //             to="/classes"
    //             className={inactiveLinkClasses}
    //             activeClassName={activeLinkClasses}
    //           >
    //             Classes
    //           </NavLink>
    //         </div>
    //         <div className="flex items-center">
    //           {user ? (
    //             <>
    //               <NavLink
    //                 to="/dashboard"
    //                 className={inactiveLinkClasses}
    //                 activeClassName={activeLinkClasses}
    //               >
    //                 Dashboard
    //               </NavLink>
    //               <div className="flex items-center ml-4">
    //                 <img
    //                   src={user.photoURL}
    //                   alt="Profile"
    //                   className="rounded-full w-8 h-8"
    //                 />
    //               </div>
    //             </>
    //           ) : (
    //             <NavLink
    //               to="/signup"
    //               className={inactiveLinkClasses}
    //               activeClassName={activeLinkClasses}
    //             >
    //               Signup
    //             </NavLink>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default NavBar;
