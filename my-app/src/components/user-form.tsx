"use client";
import { createUser } from "@/service/todo";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";

export interface inputs {
  id?: number;
  title: string;
  description: string;
}

export const UserForm = () => {
  const {
    handleSubmit,
    register,
    setError,
    reset,
    formState: { errors },
  } = useForm<inputs>();

  const [loading, setLoading] = useTransition();

  const submit = (data: inputs) => {
    setLoading(async () => {
      try {
        await createUser(data);
        reset();
      } catch (error) {
        const err = error as Error;
        setError("title", { message: err.message });
      }
    });
  };

  return (
    <div className="container p-[30px]">
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <input
            type="text"
            className="p-[6px] bg-blue-300  m-[5px] border-black border-1"
            {...register("title")}
          />
          {errors.title && (
            <p className="text-[11px] text-red-500">{errors.title.message}</p>
          )}
        </div>
        <div>
          <input
            className="p-[6px]  bg-blue-300 m-[5px]  border-black border-1"
            {...register("description")}
            type="text"
          />
        </div>
        <button
          className="p-[10px] cursor-pointer bg-green-400 text-amber-50"
          type="submit"
        >
          {loading ? "LOADING..." : "Send"}
        </button>
      </form>
    </div>
  );
};
