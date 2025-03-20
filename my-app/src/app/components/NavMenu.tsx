"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div>
          <p className="text-green-500">
            Signed in as:{" "}
            <span className="text-teal-600">{session?.user?.email}</span>
          </p>
          <button
            className="bg-gray-300 p-[5px] cursor-pointer rounded-2xl"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <p className="text-red-500">Not signed in</p>
        <button
          className="bg-amber-300 p-[5px] cursor-pointer rounded-2xl"
          onClick={() => signIn()}
        >
          Sign in
        </button>
      </div>
    </>
  );
}
