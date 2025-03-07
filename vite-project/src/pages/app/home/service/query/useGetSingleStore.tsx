import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../../config/request";
import Cookies from "js-cookie";

export const useGetSingleStore = () => {
  const data = Cookies.get("accessToken");
  if (!data) {
    throw new Error("token not found");
  }
  const token = `Bearer ${data}`;

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
