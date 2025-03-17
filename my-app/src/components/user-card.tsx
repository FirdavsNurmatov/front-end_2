"use client";
import { deleteUser, updateUser, userT } from "@/service/todo";

export const UserCard = ({ id, title, description }: userT) => {
  const deleteItem = (itemId: number) => {
    deleteUser(itemId);
  };

  const editItem = (itemId: number) => {
    console.log(itemId);
  };

  return (
    <div>
      <div className="mb-[20px] flex justify-between p-[20px] bg-gray-300">
        <div>
          <h1 className="text-2xl font-bold p-[2px]">{title}</h1>
          <p>{description}</p>
        </div>
        <div className="flex gap-1 items-center">
          <button
            onClick={() => deleteItem(id)}
            className="px-[3px] cursor-pointer h-9 bg-red-500"
          >
            delete
          </button>
          <button
            onClick={() => editItem(id)}
            className="px-[3px] cursor-pointer h-9 bg-yellow-500"
          >
            edit
          </button>
        </div>
      </div>
    </div>
  );
};
