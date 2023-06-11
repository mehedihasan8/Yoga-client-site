import useMySelectedClass from "../../../Hooks/useMySelectedClass";
import { Helmet } from "react-helmet";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Loading from "../../Sharied/Loading/Loading";

const MySelectedClasses = () => {
  const [selectedClass, refetch, isLoading] = useMySelectedClass();
  const [axiosSecure] = useAxiosSecure();
  console.log(selectedClass);
  if (isLoading) {
    return <Loading />;
  }

  const handelDeleteUser = (selected) => {
    // console.log(selected._id);

    Swal.fire({
      title: "Are you sure?",
      text: `You won't be Delete ${selected.yogaName} `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/selectedClass/${selected._id}`).then((res) => {
          // const deletedd = res.data;
          // console.log(deletedd);
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>YOGA | selected Class</title>
      </Helmet>
      <h1 className="text-3xl font-semibold text-center mt-12 mb-6">
        Selected Class : {selectedClass.length}
      </h1>
      <div className="overflow-x-auto flex flex-col items-center justify-center">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Yoga Name</th>
              <th>Instructor Eamil</th>
              <th>price</th>
              <th>Action</th>
              <th>Sent Your Money</th>
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
                <td>${selected.price}</td>

                <td>
                  <button onClick={() => handelDeleteUser(selected)}>
                    {" "}
                    <FaTrashAlt className="h-10 w-6" />
                  </button>
                </td>
                <td>
                  <Link to={`/dashbord/payment`} state={selected}>
                    <button className="btn bg-[#3173DE] text-white hover:text-black ">
                      Payment
                    </button>
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
