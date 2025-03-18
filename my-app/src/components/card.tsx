"use client";
import React, { useState } from "react";
import productImg from "/public/home/product.svg";
import clickedLikeBtn from "/public/home/like-clicked-icon.png";
import nonClickedLikeBtn from "/public/home/like-non-clicked-icon.png";

export const Card = ({ text, price }: { text: string; price: number }) => {
  const [like, setClicked] = useState(false);

  const clickLikeBtn = () => {
    !like ? setClicked(true) : setClicked(false);
  };

  return (
    <div className="bg-white-1000 p-[21px]">
      <img src={productImg.src} alt="image" />
      <p className="font-normal text-[14px] leading-[150%] text-[#999]">
        {text}
      </p>
      <p className="font-bold mb-[13px] text-[24px] leading-[100%] text-text-title">
        {price}
        <span className="line-through">w</span>{" "}
        <span className="line-through text-[15px] text-[#77798c]">8,800 W</span>
      </p>
      <div className="flex gap-1">
        <button className="cursor-pointer rounded-[6px] py-[10px] w-full bg-[#f3f3f3] font-normal text-[13px] text-center text-[#000]">
          Qo'shish
        </button>
        <button className="cursor-pointer" onClick={() => clickLikeBtn()}>
          {like ? (
            <img src={clickedLikeBtn.src} />
          ) : (
            <img src={nonClickedLikeBtn.src} />
          )}
        </button>
      </div>
    </div>
  );
};
