import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import Social from "../../Sharied/Social/Social";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaPlus } from "react-icons/fa";
import { useState } from "react";
import loginImage from "../../../../public/loginImage.png";
import { useForm } from "react-hook-form";

const Login = () => {
  const { signeInUser } = useAuth();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data.email, data.password);
    signeInUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        // console.log(user);
        Swal.fire("Good job Login!", "You clicked the button!", "success");

        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        Swal.fire({
          title: `${error.message}`,
          text: "Do you want to continue",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="lg:flex">
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-24 rounded-md w-full max-w-md">
          <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
            Login to your account
          </div>

          <Social />

          <div className="relative mt-10 h-px bg-gray-300">
            <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
              <span className="bg-white px-4 text-xs text-gray-500 uppercase">
                Or
              </span>
            </div>
          </div>

          <div className="mt-10">
            {/* <-------------------------> form <---------------------->*/}

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative my-4">
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  id="floating_outlined"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border"
                  placeholder=" "
                />

                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Enter Your Email
                </label>
              </div>

              <div className="relative my-4 mb-6">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  {...register("password", { required: true })}
                  id="floating_outlined1"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border"
                  placeholder=" "
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-3 transform -translate-y-1/2"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </button>
                <label
                  htmlFor="floating_outlined1"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Enter Your Password
                </label>
              </div>

              <p className="text-center text-red-500 mb-4">{error}</p>

              <div className="flex w-full">
                <button
                  type="submit"
                  className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                >
                  <span className="mr-2 uppercase">login</span>
                  <span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center mt-6">
            <Link
              to="/signup"
              className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center"
            >
              <FaPlus />
              <span className="ml-2">New to Summer Campe please Signup?</span>
            </Link>
            {/* <div
              onClick={handleResetPass}
              className="inline-flex cursor-pointer items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center"
            >
              <span className="ml-2">Forgot Your Password?</span>
            </div> */}
          </div>
        </div>
        {/* </div> */}
        <div className="hidden lg:flex w-[60vw] items-center justify-center bg-indigo-100 flex-1 h-auto">
          <div className="max-w-lg transform duration-200 hover:scale-110 cursor-pointer ">
            <img src={loginImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
