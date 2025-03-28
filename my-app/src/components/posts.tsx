"use client";
import getPost from "@/service/posts";
import React, { useState } from "react";
import Filter from "./filter";
import Image from "next/image";

interface IElement {
  id: number;
  title: string;
  price: number;
  images: string[];
}

const Posts = () => {
  const [filter, setFilter] = useState({});
  const { data, isLoading } = getPost(filter);
  const fn = (obj: object) => {
    setFilter({ ...filter, ...obj });
  };

  console.log(data?.products);

  return (
    <div className="flex gap-5">
      <Filter fn={(obj: object) => fn(obj)} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data?.products.map((element: IElement) => (
          // <p key={element.id} className="text-red-400">
          //   {element.title}
          // </p>
          <div key={element.id}>
            <Image
              width={100}
              height={100}
              className="w-[80px] h-[80px]"
              src={element.images[0] || ""}
              alt="product image"
            />
            <div>
              <p>{element.title}</p>
              <p>{element.price}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;
