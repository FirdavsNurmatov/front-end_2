import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../../config/request";
import { getToken } from "../../../../../config/token";

export const useGetDebts = () => {
  const token = getToken();
  return useQuery({
    queryKey: ["debt_list"],
    queryFn: () =>
      request
        .get("/debt", { headers: { Authorization: token } })
        .then((res) => res.data),
  });
};
