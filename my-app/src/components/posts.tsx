"use client";
import getPost from "@/service/posts";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <div className="grid grid-cols-3 gap-[40px]">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data?.products.map((element: IElement) => (
          <div key={element.id}>
            <Link href={"/shop"}>
              <Image
                width={100}
                height={100}
                className="w-[80px] h-[80px]"
                src={element.images[0] || ""}
                alt="product image"
              />
              <div>
                <p className="font-normal text-[16px] leading-[100%] text-[#3a3a3a]">
                  {element.title}
                </p>
                <p className="font-bold text-[18px] leading-[89%] text-[#46a358]">
                  {element.price}
                </p>
              </div>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;
