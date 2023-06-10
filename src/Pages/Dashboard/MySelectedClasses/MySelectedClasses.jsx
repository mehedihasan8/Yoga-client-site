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
            {selectedClass.map((user, i) => (
              <tr key={user._id}>
                <td>{i + 1}</td>
                <td className="border p-1">
                  <img
                    src={user.image}
                    alt={user.instructorName}
                    className=" w-[10rem] rounded-md mb-4"
                  />
                </td>
                <td>{user.instructorName}</td>
                <td>{user.email}</td>
                <td>{user.price}</td>

                <td>
                  <button onClick={() => handelDeleteUser(user)}>
                    {" "}
                    <FaTrashAlt />
                  </button>
                </td>
                <td>
                  <Link to={`/dashbord/payment`} state={user.price}>
                    <button>Payment</button>
                  </Link>
                </td>
                {/* <td>
                  <Link to="/dashbord/payment">
                    <button>Paymetn</button>
                  </Link>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClasses;
