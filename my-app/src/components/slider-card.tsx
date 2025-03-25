import React from "react";
import flowerImgSvg from "/public/slider/flower-img.svg";

export const SliderCard = () => {
  return (
    <div className="container pt-[62px]  pl-[43px] flex items-center justify-between">
      <div className="w-[557px]">
        <div className="flex flex-col gap-[5px]">
          <p className="font-normal text-[14px] leading-[171%] text-[#727272]">
            WELCOME TO GREENSHOP
          </p>
          <h1 className="font-black text-[70px] leading-[100%] uppercase text-[#3d3d3d]">
            LET'S MAKE A BETTER <span className="text-[#46a358]">PLANET</span>
          </h1>
          <p className="font-normal text-[14px] mb-[44px] leading-[171%] text-[#727272]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </p>
        </div>
        <button className="rounded-[6px] px-[26px] py-[10px] bg-[#46a358] font-bold text-[16px] leading-[125%] uppercase text-[#fff]">
          SHOP NOW
        </button>
      </div>
      <div>
        <img src={flowerImgSvg.src} alt="image" />
      </div>
    </div>
  );
};
