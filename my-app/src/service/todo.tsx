"use server";

import { revalidateTag } from "next/cache";

const url = process.env.BASE_URL;

export interface userT {
  id: number;
  title: string;
  description: string;
}

export const getAllUsers = async () => {
  const res = await fetch(`${url}/todos`, {
    next: {
      tags: ["user_list"],
    },
  });

  if (!res.ok) {
    throw new Error("Hatolik, qayta urinib ko'ring!");
  }

  const data: userT[] = await res.json();

  return data;
};

export const createUser = async (user: any) => {
  const res = await fetch(`${url}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  revalidateTag("user_list");
  const data: userT = await res.json();

  return data;
};

export const updateUser = async (id: number, user: any) => {
  const res = await fetch(`${url}/todos/${id}`, {
    method: "UPDATE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  revalidateTag("user_list");
  const data: userT = await res.json();

  return data;
};

export const deleteUser = async (id: number) => {
  const res = await fetch(`${url}/todos/${id}`, { method: "DELETE" });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  revalidateTag("user_list");
  return "user deleted";
};
