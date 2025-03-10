import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../../config/request";
import { getToken } from "../../../../../config/token";

export const useGetSingleStore = () => {
  const token = getToken();
  return useQuery({
    queryKey: ["store_data", token],
    queryFn: () =>
      request
        .get(`/store/profile`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => res.data),
  });
};
