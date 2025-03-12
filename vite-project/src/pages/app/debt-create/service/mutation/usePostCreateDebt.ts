import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../../config/request";
import { getToken } from "../../../../../config/token";

interface Debt {
  debtor_id: string;
  name: string;
  debt_date: string;
  debt_period: number;
  debt_sum: number;
  description: string;
  image?: File;
}

export const usePostCreateDebt = () => {
  const token = getToken();
  return useMutation({
    mutationFn: (data: Debt) =>
      request
        .post("debt", data, { headers: { Authorization: token } })
        .then((res) => res.data),
  });
};
