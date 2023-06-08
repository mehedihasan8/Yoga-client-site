import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageUser = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  //   const { data: users = [], refetch } = useQuery(["users"], async () => {
  //     const res = await fetch("http://localhost:5000/users");
  //     return res.json();
  //   });

  const handelAdmin = (user) => {
    // console.log(id);
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire(
            `${user.name} is Admin Naw`,
            "Confirm You Admin Panel And clicked the button!",
            "success"
          );
        }
      });
  };

  const handelInstractorUser = () => {
    console.log("okay");
  };

  return (
    <div>
      <Helmet>
        <title>Summer | Manae User</title>
      </Helmet>
      <h1 className="text-3xl font-semibold text-center mt-12">
        All User : {users.length}
      </h1>
      <div className="overflow-x-auto flex flex-col items-center justify-center">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Eamil</th>
              <th>Roul</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handelAdmin(user)}>
                    {user.role === "admin" ? "admin " : <FaEdit />}
                  </button>
                </td>
                <td>
                  <button onClick={() => handelInstractorUser(user)}>
                    {" "}
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
