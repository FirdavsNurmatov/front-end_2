import React from "react";
import productImg from "/public/home/product.svg";

export const Card = ({ text, price }: { text: string; price: number }) => {
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
      <button className="cursor-pointer rounded-[6px] py-[10px] w-full bg-[#f3f3f3] font-normal text-[13px] text-center text-[#000]">
        Qo'shish
      </button>
    </div>
  );
};
