import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

export const Header = async () => {
  const userToken = cookies();
  const token = (await userToken).get("token");

  return (
    <div className=" bg-amber-300 p-[40px] flex gap-4 justify-center">
      <Link href={"/register"}>Register</Link>
      {token ? (
        <Link href={"/profile"}>Profile</Link>
      ) : (
        <Link href={"/login"}>Login</Link>
      )}
    </div>
  );
};
