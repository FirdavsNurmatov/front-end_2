"use client";
import Image from "next/image";
import React, { useReducer } from "react";
import productSvg from "/public/shop/product.svg";
import likeBtnSvg from "/public/shop/like-btn.svg";

type State = { count: number };

type Action = { type: "increment" } | { type: "decrement" };

const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      if (1 < state.count) return { count: state.count - 1 };
    default:
      return state;
  }
};

const Shop = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 1 });

  return (
    <div className=" container pt-[80px] flex justify-between">
      <div>
        <Image src={productSvg} alt="plant image" />
      </div>
      <div className="flex flex-col gap-[25px] w-[575px]">
        <div>
          <h3 className="mb-[27px] font-bold text-[28px] leading-[57%] text-[#3d3d3d]">
            Barberton Daisy
          </h3>
          <p className="font-bold text-[22px] leading-[73%] text-[#46a358]">
            $119.00
          </p>
        </div>
        <div>
          <p className="font-medium mb-[10px] text-[15px] leading-[107%] text-[#3d3d3d]">
            Short Description:
          </p>
          <p className="font-normal text-[14px] leading-[171%] text-[#727272]">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
          </p>
        </div>
        <div>
          <p className="font-medium mb-[10px] text-[15px] leading-[107%] text-[#3d3d3d]">
            Size:
          </p>
          <div className="flex gap-[20px]">
            <button className="border-1 rounded-[20px] px-[4px] border-black hover:text-[#4ca65d] hover:border-[#4ca65d] font-semibold">
              S
            </button>
            <button className="border-1 rounded-[20px] px-[4px] border-black hover:text-[#4ca65d] hover:border-[#4ca65d] font-semibold">
              M
            </button>
            <button className="border-1 rounded-[20px] px-[4px] border-black hover:text-[#4ca65d] hover:border-[#4ca65d] font-semibold">
              L
            </button>
            <button className="border-1 rounded-[20px] px-[4px] border-black hover:text-[#4ca65d] hover:border-[#4ca65d] font-semibold">
              XL
            </button>
          </div>
        </div>
        <div className="flex gap-[20px]">
          <div className="flex items-center gap-[22px]">
            <button
              onClick={() => dispatch({ type: "decrement" })}
              className="font-normal  text-[28px] leading-[57%]  rounded-[31px] w-[33px] h-[33px] text-[#fff] bg-[#46a358]"
            >
              -
            </button>
            <p>{state.count}</p>
            <button
              onClick={() => dispatch({ type: "increment" })}
              className="font-normal text-[28px] leading-[57%]  rounded-[31px] w-[33px] h-[33px] text-[#fff] bg-[#46a358]"
            >
              +
            </button>
          </div>
          <button className="font-bold rounded-[6px] py-[10px] px-[32px] bg-[#46a358] text-[14px] leading-[143%] uppercase text-[#fff]">
            BUY NOW
          </button>
          <button className="font-bold rounded-[6px] py-[10px] px-[20px] text-[#46a358] border-1 border-[#46a358] text-[14px] leading-[143%] uppercase bg-[#fff]">
            ADD TO CART
          </button>
          <button className="rounded-[6px] p-[10px] border-1 border-[#46a358]">
            <Image src={likeBtnSvg} alt="like button" />
          </button>
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="font-normal text-[15px] leading-[107%] text-[#a5a5a5]">
            SKU: <span className="text-[#727272]">1995751877966</span>
          </p>
          <p className="font-normal text-[15px] leading-[107%] text-[#a5a5a5]">
            Categories: <span className="text-[#727272]">Potter Plants</span>
          </p>
          <p className="font-normal text-[15px] leading-[107%] text-[#a5a5a5]">
            Tags: <span className="text-[#727272]">Home, Garden, Plants</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
