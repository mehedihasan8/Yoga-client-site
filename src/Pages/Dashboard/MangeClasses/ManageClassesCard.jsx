import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageClassesCard = ({ item, index, refetch }) => {
  console.log(item);
  const [selectedClass, setSelectedClass] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [sendFeedback, setSendFeedback] = useState(false);

  const {
    _id,
    image,
    yogaName,
    instructorName,
    email,
    availableSeats,
    price,
    status,
  } = item;

  //   console.log(item);

  const [axiosSecure] = useAxiosSecure();

  const handleSetStatus = async (status) => {
    try {
      const res = await axiosSecure.patch(`/approvedClass/${_id}`, { status });
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "bottom-start",
          icon: "success",
          title: "Your Status has been saved",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSendFeedback = async () => {
    try {
      const res = await axiosSecure.patch(`/approvedClass/${_id}`, {
        status,
        feedback,
      });
      if (res.data.modifiedCount > 0) {
        setFeedback("");
        setSelectedClass(null);
        setSendFeedback(true);
        Swal.fire({
          position: "bottom-start",
          icon: "success",
          title: "Your feedback has been sent",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <tr>
        <td className="border px-4 py-2">{index + 1}</td>
        <td className="border p-1">
          <img
            src={image}
            alt={yogaName}
            className=" w-[10rem] rounded-md mb-4"
          />
        </td>
        <td className="border px-4 py-2">{yogaName}</td>
        <td className="border px-4 py-2">{instructorName}</td>
        <td className="border px-4 py-2">{email}</td>
        <td className="border px-4 py-2">{availableSeats}</td>
        <td className="border px-4 py-2">{price}</td>
        <td className="border px-4 py-2">{status}</td>
        <td className="border px-4 py-2">
          {status === "pending" && (
            <div className="w-[6rem] mx-auto text-center">
              <button
                onClick={() => handleSetStatus("approved")}
                className="bg-green-500 mb-1 block w-[6rem] mx-auto hover:bg-green-600 text-white px-4 py-2 rounded-md mr-2"
              >
                Approve
              </button>
              <button
                onClick={() => handleSetStatus("denied")}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
              >
                Deny
              </button>
            </div>
          )}
          {(status === "approved" || status === "denied") && (
            <button
              onClick={() => setSelectedClass(item)}
              className={`${
                sendFeedback && "hidden"
              } bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md`}
            >
              Send Feedback
            </button>
          )}
        </td>
      </tr>
      {selectedClass && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white absolute right-56 w-[45%] p-8 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Send Feedback</h3>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full h-32 rounded-md border border-gray-300 mb-4 p-2"
              placeholder="Write your feedback..."
            ></textarea>
            <div className="flex justify-end">
              <button
                onClick={handleSendFeedback}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Send
              </button>
              <button
                onClick={() => setSelectedClass(null)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md ml-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageClassesCard;
