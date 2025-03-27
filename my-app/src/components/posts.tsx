"use client";
import getPost from "@/service/posts";
import React, { useState } from "react";
import Filter from "./filter";

const Posts = () => {
  const [filter, setFilter] = useState({});
  const { data, isLoading } = getPost(filter);
  const fn = (obj: object) => {
    setFilter({ ...filter, ...obj });
  };

  console.log(data);

  return (
    <div className="flex gap-5">
      <Filter fn={(obj: object) => fn(obj)} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data?.map((el) => (
          <p key={el.id} className="text-red-400">
            {el.title}
          </p>
        ))
      )}
    </div>
  );
};

export default Posts;
