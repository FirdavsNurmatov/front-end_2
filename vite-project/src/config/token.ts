import Cookies from "js-cookie";

export const getToken = () => {
  const data = Cookies.get("accessToken");
  if (!data) {
    throw new Error("token not found");
  }
  return `Bearer ${data}`;
};
