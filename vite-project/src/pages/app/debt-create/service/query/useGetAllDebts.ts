import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../../config/request";

export const useGetAllDebts = () => {
  return useQuery({
    queryKey: ["debt_list"],
    queryFn: () => request.get("/debt").then((res) => res.data),
  });
};
