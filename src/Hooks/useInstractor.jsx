import { useQuery } from "@tanstack/react-query";

const useInstractor = () => {
  const {
    data: instractors = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["instractor"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/instractor");
      return res.json();
    },
  });
  return [instractors, loading, refetch];
};

export default useInstractor;
