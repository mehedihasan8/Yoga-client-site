import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";

const MyClasses = () => {
  const [addedClasses, setAddedClasses] = useState([]);
  const { user } = useAuth();

  const [axiosSecure] = useAxiosSecure();

  //   axiosSecure.get(`/addedclass?email=${user?.email}`).then((res) => {
  //     console.log(res.data);
  //     setAddedClasses(res.data);
  //   });
  //   useEffect(() => {
  //     fetch(`http://localhost:5000/addedclass?email=${user?.email}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setAddedClasses(data);
  //       });
  //   }, [user?.email]);
  console.log(addedClasses);
  //   const [addedClasses, setAddedClasses] = useState([]);
  //   const { user } = useAuth();
  //   const [axiosSecure] = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosSecure.get(
          `/addedclass?email=${user?.email}`
        );
        setAddedClasses(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const openFeedbackModal = (feedback) => {
    const modalElement = document.getElementById("my_modal_1");
    modalElement.querySelector(".feedback-text").textContent = feedback;
    modalElement.showModal();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl text-center md:text-4xl font-semibold mb-16">
        My Classes
      </h2>

      {addedClasses.length === 0 ? (
        <p className="text-center md:text-3xl mt-16 text-red-400">
          You haven't added any classes yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-1 py-4 border bg-slate-100">Image</th>
                <th className="px-4 py-4 border bg-slate-100">Sport Name</th>
                <th className="px-4 py-4 border bg-slate-100">Instructor</th>
                <th className="px-4 py-4 border bg-slate-100">
                  Available Seats
                </th>
                <th className="px-4 py-4 border bg-slate-100">Price</th>
                <th className="px-4 py-4 border bg-slate-100">Status</th>
              </tr>
            </thead>
            <tbody>
              {addedClasses.map((classItem) => (
                <tr key={classItem._id} className="text-center">
                  <td className="py-1 border">
                    <div className="w-[80%] rounded-md mx-auto">
                      <img
                        src={classItem.image}
                        className="h-14 w-full rounded-md"
                        alt="classImage"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-5 border">{classItem.sportName}</td>
                  <td className="px-4 py-5 border">
                    {classItem.instructorName}
                  </td>
                  <td className="px-4 py-5 border">
                    {classItem.availableSeats}
                  </td>
                  <td className="px-4 py-5 border">{classItem.price}</td>
                  <td className="px-4 pt-3 pb-2 border">
                    {classItem.status === "pending" && (
                      <span className="badge badge-ghost">Pending</span>
                    )}
                    {classItem.status === "approved" && (
                      <span className="badge badge-success">Approved</span>
                    )}
                    {classItem.status === "denied" && (
                      <div
                        className="tooltip tooltip-open tooltip-accent mt-7 mb-0"
                        data-tip="View Feedback"
                      >
                        <button
                          onClick={() => openFeedbackModal(classItem.feedback)}
                          className="btn btn-sm btn-error mb-0"
                        >
                          Denied
                        </button>
                        {/* modal data-------- */}
                        <dialog id="my_modal_1" className="modal">
                          <form method="dialog" className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="pt-4 text-lg feedback-text">
                              {classItem.feedback
                                ? classItem.feedback
                                : "No feedback here !"}
                            </p>
                            <div className="modal-action">
                              <button className="btn">Close</button>
                            </div>
                          </form>
                        </dialog>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyClasses;
