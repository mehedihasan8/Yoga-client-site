import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCles = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: myclass = [], refetch } = useQuery({
    enabled: !loading && !!user?.email,

    queryKey: ["myclass", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/myclass?email=${user?.email}`);
      // console.log("res from axios", res);
      return res.data;
    },
  });
  return [myclass, refetch];
};

export default useCles;
