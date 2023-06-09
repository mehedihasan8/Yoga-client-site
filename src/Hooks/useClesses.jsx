import { useQuery } from "@tanstack/react-query";

const useClesses = () => {
  const {
    data: clesses = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["clesses"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/clesses");
      return res.json();
    },
  });
  return [clesses, loading, refetch];
};

export default useClesses;
