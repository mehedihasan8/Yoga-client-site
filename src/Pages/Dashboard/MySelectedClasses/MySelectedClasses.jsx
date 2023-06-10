import React from "react";
import useMySelectedClass from "../../../Hooks/useMySelectedClass";
import { Helmet } from "react-helmet";
import { FaEdit, FaReact, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MySelectedClasses = () => {
  const [selectedClass] = useMySelectedClass();
  console.log(selectedClass);
  return (
    <div>
      <Helmet>
        <title>Bistro | selected Class</title>
      </Helmet>
      <h1 className="text-3xl font-semibold text-center mt-12">
        All selected Class : {selectedClass.length}
      </h1>
      <div className="overflow-x-auto flex flex-col items-center justify-center">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Eamil</th>
              <th>price</th>
              <th>Action</th>
              <th>Sent</th>
            </tr>
          </thead>
          <tbody>
            {selectedClass.map((selected, i) => (
              <tr key={selected._id}>
                <td>{i + 1}</td>
                <td className="border p-1">
                  <img
                    src={selected.image}
                    alt={selected.instructorName}
                    className=" w-[10rem] rounded-md mb-4"
                  />
                </td>
                <td>{selected.instructorName}</td>
                <td>{selected.email}</td>
                <td>{selected.price}</td>

                <td>
                  <button onClick={() => handelDeleteUser(selected)}>
                    {" "}
                    <FaTrashAlt />
                  </button>
                </td>
                <td>
                  <Link to={`/dashbord/payment`} state={selected}>
                    <button>Payment</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClasses;
