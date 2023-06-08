import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();
  console.log(user);

  const handlogOut = () => {
    logOut();
  };

  return (
    <div className="navbar bg-base-100 shadow mx-0 ">
      <div className="flex-1">
        <Link to="/">
          <li className="btn btn-ghost normal-case text-xl ">daisyUI</li>
        </Link>
      </div>
      <div className="flex-none ">
        <div className="dropdown dropdown-end ">
          <label tabIndex={0} className="btn btn-ghost  btn-circle avatar">
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
              <Link to="/instructor">Instructors</Link>
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
  );
};

export default NavBar;
