import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../../config/request";
import { getToken } from "../../../../../config/token";

interface Debtor {
  store_id: string;
  full_name: string;
  phone_number: string;
  address: string;
  note: string;
  file: [];
}

export const usePostDebtor = () => {
  const token = getToken();
  return useMutation({
    mutationFn: (data: Debtor) =>
      request
        .post("/debtors", data, { headers: { Authorization: token } })
        .then((res) => res.data),
  });
};
