import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../../config/request";
import { getToken } from "../../../../../config/token";

export const useGetDebtors = () => {
  const token = getToken();
  return useQuery({
    queryKey: ["debtor_list"],
    queryFn: () =>
      request
        .get("/debtors/active/all", { headers: { Authorization: token } })
        .then((res) => res.data),
  });
};
