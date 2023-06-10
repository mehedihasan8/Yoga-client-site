import useClesses from "../../../Hooks/useClesses";
import ManageClassesCard from "./ManageClassesCard";

const ManaeClasses = () => {
  const [clesses, , refetch] = useClesses();
  console.log(clesses);
  return (
    <div className="">
      <div className="container mx-auto px-4 ">
        <h2 className="text-2xl text-center md:text-4xl font-semibold mb-16">
          Manage Classes
        </h2>

        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Sport Name</th>
              <th className="px-4 py-2">Instructor Name</th>
              <th className="px-4 py-2">Instructor Email</th>
              <th className="px-4 py-2">Available Seats</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clesses.map((item, index) => (
              <ManageClassesCard
                key={item._id}
                index={index}
                refetch={refetch}
                item={item}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManaeClasses;
