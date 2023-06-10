import { Link } from "react-router-dom";
import notFoundImage from "../../../assets/image/notFound.png";
const Error = () => {
  return (
    <div className="lg:flex mx-auto justify-center items-center min-h-screen">
      <div>
        <img src={notFoundImage} alt="" />
      </div>
      <div className="w-full px-4">
        <p className="text-6xl font-extrabold text-red-400">404 ERROR</p>
        <p className="text-2xl font-extrabold text-gray-400">
          Oops!! Page Not Found
        </p>
        <p className="lg:w-[60ch] my-4">
          The page you are looking for is not available right now or link may be
          broken or the page is removed by author.
        </p>
        <Link
          className="font-semibold text-gray-600 border py-2 px-5 rounded-full my-3 bg-blue-200"
          to="/"
        >
          Back To Homepage
        </Link>
      </div>
    </div>
  );
};

export default Error;
