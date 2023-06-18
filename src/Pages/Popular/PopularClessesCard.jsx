import { Link } from "react-router-dom";

const PopularClessesCard = ({ singelClass }) => {
  const { image, yogaName, instructorName, availableSeats, price } =
    singelClass;

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="3000"
      className="p-4 rounded-lg shadow-md transition duration-200 ease-in-out transform hover:scale-110"
    >
      <div className="w-[99%] mx-auto h-[13rem] mb-4">
        <img
          src={image}
          alt={yogaName}
          className="w-full h-[14rem] rounded-md"
        />
      </div>
      <h3 className="text-2xl font-bold mt-6 ">{yogaName}</h3>
      <p className="text-base mb-2 font-semibold ">
        Instructor: {instructorName}
      </p>
      <p className="text-sm mb-2">Available Seats: {availableSeats}</p>
      <p className="text-sm mb-4">Price: ${price}</p>
      <Link to="/classes">
        <button className="btn mb-3 btn-accent text-white border-0 bg-[#6144FF] w-full">
          View Class
        </button>
      </Link>
    </div>
  );
};

export default PopularClessesCard;
