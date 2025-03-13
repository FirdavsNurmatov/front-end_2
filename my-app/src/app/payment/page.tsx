import React from "react";
import simCardLogo from "/public/payment/sim-card-logo.svg";

const Page = () => {
  return (
    <div className="flex border-1 border-inputbg">
      <div>
        <div className="p-[50px] min-w-[300px]">
          <ul className="flex flex-col gap-[35px] pl-[20px] py-[34px]">
            <li>Uyali aloqa</li>
            <li>Internet</li>
            <li>Kommunal xizmatlar</li>
          </ul>
          <p className="pt-[30px] pl-[30px] pb-[50px] bg-inputbg">
            To'lovlar tarixi
          </p>
        </div>
      </div>
      <div className="grow py-[50px] pl-[145px]">
        <div>
          <div>
            <p className="font-semibold text-[20px] text-text-title">
              To'lov xizmatlari
            </p>
            <p>Uyali aloqa</p>
          </div>
          <div className="grid grid-cols-4 pt-[40px] gap-[40px]">
            <img className="cursor-pointer" src={simCardLogo.src} alt="logo" />
            <img className="cursor-pointer" src={simCardLogo.src} alt="logo" />
            <img className="cursor-pointer" src={simCardLogo.src} alt="logo" />
            <img className="cursor-pointer" src={simCardLogo.src} alt="logo" />
            <img className="cursor-pointer" src={simCardLogo.src} alt="logo" />
            <img className="cursor-pointer" src={simCardLogo.src} alt="logo" />
            <img className="cursor-pointer" src={simCardLogo.src} alt="logo" />
            <img className="cursor-pointer" src={simCardLogo.src} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
