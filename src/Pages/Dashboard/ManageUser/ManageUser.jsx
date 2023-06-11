import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import { useEffect } from "react";

const ManageUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [makeloading, setMakeLoading] = useState(false);

  const { data: userse = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axiosSecure.get("/users");
      console.log(res.data);
      setUsers(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMakeInstructor = async (userId) => {
    setMakeLoading(true);
    try {
      const res = await axiosSecure.patch(`/users/${userId}`, {
        role: "instructor",
      });
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "User role updated to Instructor",
          showConfirmButton: false,
          timer: 1000,
        });
        fetchUsers();
        setMakeLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleMakeAdmin = async (userId) => {
    try {
      const res = await axiosSecure.patch(`/users/${userId}`, {
        role: "admin",
      });
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "User role updated to Admin",
          showConfirmButton: false,
          timer: 1000,
        });
        fetchUsers();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl text-center md:text-4xl font-semibold mb-16">
        Manage Users
      </h2>

      {loading ? (
        <span className="loading loading-dots loading-lg"></span>
      ) : (
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2 border-2 bg-slate-100">Num</th>
              <th className="py-2 border-2 bg-slate-100">Name</th>
              <th className="py-2 border-2 bg-slate-100">Email</th>
              <th className="py-2 border-2 bg-slate-100">Role</th>
              <th className="py-2 border-2 bg-slate-100">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td className="py-2 border-2 text-center">{index + 1}</td>
                <td className="py-2 border-2 text-center">{user.name}</td>
                <td className="py-2 border-2 text-center">{user.email}</td>
                <td className="py-2 border-2 text-center">
                  <span className="badge badge-ghost">{user.role}</span>
                </td>
                <td className="py-2 border-2 text-center">
                  <button
                    onClick={() => handleMakeInstructor(user._id)}
                    className={`${
                      user.role === "instructor" && "btn btn-sm btn-disabled"
                    } btn btn-primary btn-sm mr-2`}
                    disabled={user.role === "instructor" || makeloading}
                  >
                    Make Instructor
                  </button>
                  <button
                    onClick={() => handleMakeAdmin(user._id)}
                    className={`${
                      user.role === "admin" && "btn btn-sm btn-disabled"
                    } btn btn-success btn-sm `}
                    disabled={makeloading || user.role === "admin"}
                  >
                    Make Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );

  //   const { data: users = [], refetch } = useQuery(["users"], async () => {
  //     const res = await fetch("http://localhost:5000/users");
  //     return res.json();
  //   });

  // const handelAdmin = (user) => {
  //   // console.log(id);
  //   fetch(`http://localhost:5000/users/admin/${user._id}`, {
  //     method: "PATCH",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       if (data.modifiedCount) {
  //         refetch();
  //         Swal.fire(
  //           `${user.name} is Admin Naw`,
  //           "Confirm You Admin Panel And clicked the button!",
  //           "success"
  //         );
  //       }
  //     });
  // };

  // const handelInstractorUser = () => {
  //   console.log("okay");
  // };

  // return (
  //   <div>
  //     <Helmet>
  //       <title>Summer | Manae User</title>
  //     </Helmet>
  //     <h1 className="text-3xl font-semibold text-center mt-12">
  //       All User : {users.length}
  //     </h1>
  //     <div className="overflow-x-auto flex flex-col items-center justify-center">
  //       <table className="table table-zebra">
  //         {/* head */}
  //         <thead>
  //           <tr>
  //             <th>No</th>
  //             <th>Name</th>
  //             <th>Eamil</th>
  //             <th>Roul</th>
  //             <th>Action</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {users.map((user, i) => (
  //             <tr key={user._id}>
  //               <th>{i + 1}</th>
  //               <td>{user.name}</td>
  //               <td>{user.email}</td>
  //               <td>
  //                 <button onClick={() => handelAdmin(user)}>
  //                   {user.role === "admin" ? "admin " : <FaEdit />}
  //                 </button>
  //               </td>
  //               <td>
  //                 <button onClick={() => handelInstractorUser(user)}>
  //                   {" "}
  //                   <FaTrashAlt />
  //                 </button>
  //               </td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     </div>
  //   </div>
  // );
};

export default ManageUser;
