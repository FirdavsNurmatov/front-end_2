"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

export interface inputs {
  email: string;
  password: string;
}

const Login = () => {
  const {
    handleSubmit,
    register,
    reset,
    setError,
    formState: { errors },
  } = useForm<inputs>();

  const submit = (data: inputs) => {
    if (!data.email || !data.password) {
      //   setError('email',{message:errors.});
    }
    console.log("ok");
  };

  return (
    <div className="container ">
      <Link href={"/"}>
        <p>{"<< Home <<"}</p>
      </Link>
      <form className="text-center" onSubmit={handleSubmit(submit)}>
        <div className=" p-[30px] items-center flex flex-col">
          <input
            className="outline-1 text-[18px] p-[5px] mb-[10px] w-[200px]  outline-green-500"
            type="text"
            placeholder="email"
            {...register("email")}
          />
          <input
            className="outline-1 p-[5px] text-[18px]  w-[200px]  outline-green-500"
            type="text"
            placeholder="password"
            {...register("password")}
          />
        </div>
        <button
          type="submit"
          className="bg-white px-[20px] hover:bg-blue-500 hover:text-white cursor-pointer py-[5px] border-1 rounded-2xl border-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
