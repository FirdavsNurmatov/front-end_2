import React from "react";

const Card = () => {
  return (
    <div className="container mt-[40px] flex gap-[30px]">
      <div className="grow">
        <ul className="flex justify-between">
          <li className="font-medium text-[16px] leading-[100%] text-[#3d3d3d]">
            Products
          </li>
          <li className="font-medium text-[16px] leading-[100%] text-[#3d3d3d]">
            Price
          </li>
          <li className="font-medium text-[16px] leading-[100%] text-[#3d3d3d]">
            Quantity
          </li>
          <li className="font-medium text-[16px] leading-[100%] text-[#3d3d3d]">
            Total
          </li>
        </ul>
      </div>
      <div>
        <p className=" font-bold text-[18px] leading-[89%] text-[#3d3d3d]">
          Cart Totals
        </p>
        <div className="pt-[22px]">
          <p className="font-normal mb-[8px] text-[14px] text-[#3d3d3d] leading-[114%]">
            Coupon Apply
          </p>
          <form className="flex">
            <input
              className="border-1 text-[14px] outline-none py-[12px] px-[10px] border-[#46a358]"
              type="text"
              placeholder="Enter coupon code here..."
            />
            <button className="font-bold text-[15px] px-[35px] leading-[107%] text-[#fff] rounded-[0 3px 3px 0] bg-[#46a358]">
              Apply
            </button>
          </form>
          <div className="flex mb-[50px] justify-between">
            <div>
              <p>Subtotal</p>
              <p>Coupon Discount</p>
              <p>Shiping</p>
            </div>
            <div>
              <p>{2683.0}</p>
              <p>{22.0}</p>
              <p>{16.0}</p>
            </div>
          </div>
          <button className="bg-[#46a358] w-[100%] py-[12px] block text-[#fff]">
            Proceed To Checkout
          </button>
          <button className="text-[#46a358] w-[100%] py-[12px] bg-[#fff]">
            Continue Shoppping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
