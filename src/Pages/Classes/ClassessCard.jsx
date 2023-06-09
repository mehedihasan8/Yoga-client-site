import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCles from "../../Hooks/useCles";
import Swal from "sweetalert2";

const ClassessCard = ({ yoga }) => {
  const { image, yogaName, instructorName, availableSeats, price, _id } = yoga;

  const isSeatsAvailable = availableSeats > 0;

  //   const isSelectable = isSeatsAvailable && isLoggedIn && !isAdmin;

  const { user } = useAuth();
  const navigate = useNavigate();
  const isAdmin = false;
  const isInstructor = false;
  const isSelectable = isSeatsAvailable && !isAdmin && !isInstructor;
  const [selected, setSelected] = useState(false);
  const [axiosSecure] = useAxiosSecure();
  const [myclass] = useCles();
  console.log(myclass);

  useEffect(() => {
    const selectedClesses = myclass.find((c) => c.classId === _id);
    setSelected(!!selectedClesses);
  }, [myclass, _id]);

  const handleSelect = (yoga) => {
    console.log(yoga);
    if (user) {
      if (selected) {
        return;
      }

      setSelected(true);
      const Classes = {
        classId: _id,
        email: user.email,
        image,
        yogaName,
        instructorName,
        availableSeats,
        price,
      };

      axiosSecure.post(`/myclass?email=${user.email}`, Classes).then((res) => {
        console.log(res.data);
        if (res.data === "card already exists") {
          // Handle case when the sport is already selected
        }
        if (res.data.insertedId) {
          Swal.fire({
            position: "bottom-start",
            icon: "success",
            title: "Your Class has been selected successfully.",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
    } else {
      navigate("/signin");
      Swal.fire({
        position: "bottom-start",
        icon: "info",
        title: "Please log in before selecting the course.",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };
  return (
    <div
      className={`${
        isSeatsAvailable
          ? "bg-white transition text-center duration-200 ease-in-out hover:scale-110"
          : "bg-red-600 text-white"
      } p-4 rounded-lg shadow-md transition text-center duration-200 ease-in-out hover:scale-110`}
    >
      <div className="w-[99%] mx-auto h-[13rem] mb-4 ">
        <img
          src={image}
          alt={yogaName}
          className="w-full h-[13rem] rounded-md"
        />
      </div>
      <h3 className="text-2xl font-bold">{yogaName}</h3>
      <p className="text-sm  mb-2">Instructor: {instructorName}</p>
      <p className="text-sm  mb-2">Available Seats: {availableSeats}</p>
      <p className="text-sm  mb-4">Price: {price}</p>
      {!user && (
        <p className="text-red-500 text-sm mb-4">
          Please log in before selecting the course.
        </p>
      )}
      {/* <button
        disabled={!isSelectable}
        className={`w-full py-2 px-4 bg-${
          isSelectable ? "blue" : "gray"
        }-500 hover:bg-${
          isSelectable ? "blue" : "gray"
        }-600 text-white font-semibold rounded-md transition duration-300`}
      >
        {isSelectable ? "Select" : "Unavailable"}
      </button> */}
      <button
        onClick={() => handleSelect(yoga)}
        disabled={!isSelectable || selected}
        className={`w-full py-2 px-4 ${isSelectable ? "bg-blue-500" : ""} ${
          selected && "bg-green-500 hover:bg-green-500"
        } hover:bg-${
          isSelectable ? "blue" : ""
        }-600 text-white font-semibold rounded-md transition duration-300`}
      >
        {selected ? "Selected" : isSelectable ? "Select" : "Unavailable"}
      </button>
    </div>
  );
};

export default ClassessCard;
