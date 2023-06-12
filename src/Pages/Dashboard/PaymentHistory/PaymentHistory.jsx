import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../../Hooks/useAuth";
import { Helmet } from "react-helmet";

const PaymentHistory = () => {
  const [entrolClasses, setEntrolClasses] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(
      `https://summer-camping-server.vercel.app/paymenthistory/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) setEntrolClasses(data);
      });
  }, []);

  console.log(entrolClasses);
  return (
    <>
      <Helmet>
        <title> YOGA | Payment History</title>
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl text-center md:text-4xl font-semibold mb-16">
          Your Transtion Total classes {entrolClasses.length}
        </h2>

        {entrolClasses.length === 0 ? (
          <p className="text-center md:text-3xl mt-16 text-red-400">
            You haven't added any Transtion yet.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto mt-4">
              <thead>
                <tr>
                  <th className="px-1 py-4 border bg-black text-white">No</th>
                  <th className="px-4 py-4 border bg-black text-white">
                    Class Name
                  </th>
                  <th className="px-4 py-4 border bg-black text-white">
                    Transition id
                  </th>
                  <th className="px-4 py-4 border bg-black text-white">Date</th>
                </tr>
              </thead>
              <tbody className="mt-4">
                {entrolClasses.map((classItem, i) => (
                  <tr key={classItem._id} className="text-center">
                    <td className="py-1 border font-bold">
                      <p>{i + 1}</p>
                    </td>
                    <td className="px-4 py-5 border font-bold">
                      {classItem.yogaName}
                    </td>

                    <td className="px-4 py-5 border font-bold">
                      {classItem.transitionId}
                    </td>
                    <td className="px-4 py-5 border font-bold">
                      {classItem.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default PaymentHistory;
