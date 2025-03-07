import { useMutation } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useSignInAdmin = () => {
  return useMutation({
    mutationFn: (data: { login: string; password: string }) =>
      request
        .post("/auth/signin", data, {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJGaXJkYXZzIiwiaWQiOiJjNzAwZWE4ZC0yMzc4LTQ2MDItODEwOS0wY2I2NDRlNTAwNGMiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NDEzNDM2OTgsImV4cCI6MTc0MjYzOTY5OH0.AfQCWYFE1LCSi2wZo5x57xjFhGnWSJYWLld8qUR875o`,
          },
        })
        .then((res) => res.data),
  });
};
