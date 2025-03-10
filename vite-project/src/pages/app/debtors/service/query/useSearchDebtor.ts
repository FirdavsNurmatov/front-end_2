import { useQuery } from "@tanstack/react-query";
import { getToken } from "../../../../../config/token";
import { request } from "../../../../../config/request";

export const useSearchDebtor = (data: string) => {
  const token = getToken();
  return useQuery({
    queryKey: ["single_debtor_data", data],
    queryFn: () =>
      request
        .get(`/debtors/${data}`, { headers: { Authorization: token } })
        .then((res) => res.data),
  });
};
