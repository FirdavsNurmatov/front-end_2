import { useMutation } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useSignInAdmin = () => {
  useMutation({
    mutationFn: (data: { username: string; password: string }) =>
      request.post("/auth/signin", data).then((res) => res.data),
  });
};
