import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useMySelectedClass = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: selectedClass = [], refetch } = useQuery({
    enabled: !loading && !!user?.email,

    queryKey: ["selectedClass", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/selectedClass?email=${user?.email}`);
      // console.log("res from axios", res);
      return res.data;
    },
  });
  return [selectedClass, refetch];
};

export default useMySelectedClass;
