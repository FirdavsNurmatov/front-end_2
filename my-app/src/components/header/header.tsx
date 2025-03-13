import React from "react";
import Link from "next/link";
import logo from "/public/logo.svg";
import searchIcon from "/public/header/search-icon.svg";
import contactIcon from "/public/header/contact-icon.svg";
import cardIcon from "/public/header/card-icon.svg";
import profileIcon from "/public/header/profile-icon.svg";

export const Header = () => {
  return (
    <div>
      <div className="flex gap-[40px] px-[55px] py-[20px] items-center">
        <Link href={"/"}>
          <img src={logo.src} alt="logo" />
        </Link>
        <div className="cursor-pointer border-2 h-[49px] border-[#bfe7df] grow rounded-[6px] flex items-center">
          <img src={searchIcon.src} alt="icon" className="ml-[9px]" />
          <input
            type="text"
            placeholder="Qidiruv"
            className="ml-[8px] pl-[8px] mr-[15px] w-[100%] h-[100%] border-0 outline-0"
          />
        </div>
        <Link href={"/"}>
          <div className="flex gap-1 items-center">
            <img src={contactIcon.src} alt="icon" />
            <p className="font-semibold text-3.5 leading-[129%] underline">
              Bog’lanish
            </p>
          </div>
        </Link>
        <Link href={"/"}>
          <button className="border-1 border-[#60c2af] rounded-[6px] px-[12px] py-[11px] flex gap-[8px] cursor-pointer">
            <img src={cardIcon.src} alt="icon" />
            <p className="font-bold text-[13px] text-[#60c2af]">Payme</p>
          </button>
        </Link>
        <select name="language">
          <option value="uz">Uz / UZS</option>
        </select>
        <img src={profileIcon.src} alt="icon" className="cursor-pointer" />
      </div>
    </div>
  );
};
