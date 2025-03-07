import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useGetStores = () => {
  return useQuery({
    queryKey: ["stores_list"],
    queryFn: () => request.get("/store").then((res) => res.data),
  });
};
