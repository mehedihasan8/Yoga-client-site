import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const MyEnrolMentClasses = () => {
  const [entrolClasses, setEntrolClasses] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/payment/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) setEntrolClasses(data);
      });
  }, []);

  console.log(entrolClasses);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl text-center md:text-4xl font-semibold mb-16">
        Your enrol ment classes {entrolClasses.length}
      </h2>

      {entrolClasses.length === 0 ? (
        <p className="text-center md:text-3xl mt-16 text-red-400">
          You haven't added any classes yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto mt-4">
            <thead>
              <tr>
                <th className="px-1 py-4 border bg-slate-100">Image</th>
                <th className="px-4 py-4 border bg-slate-100">Yoga Name</th>
                <th className="px-4 py-4 border bg-slate-100">Instructor</th>
                <th className="px-4 py-4 border bg-slate-100">Status</th>
              </tr>
            </thead>
            <tbody className="mt-4">
              {entrolClasses?.map((classItem) => (
                <tr key={classItem._id} className="text-center">
                  <td className="py-1 border">
                    <div className="w-[80%] rounded-md mx-auto">
                      <img
                        src={classItem.image}
                        className="h-20 w-full rounded-md"
                        alt="classImage"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-5 border">{classItem.yogaName}</td>
                  <td className="px-4 py-5 border">
                    {classItem.instructorName}
                  </td>
                  <td className="px-4 py-5 b  badge-accent text-center uppercase font-bold rounded-md ">
                    {classItem.payment}
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

export default MyEnrolMentClasses;
