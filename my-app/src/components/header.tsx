import React from "react";
import logoSvg from "/public/logo.svg";
import Link from "next/link";
import korzinkaIconSvg from "/public/header/korzinka-icon.svg";
import loginBtnIconSvg from "/public/header/login-btn-icon.svg";
import searchIconSvg from "/public/header/search-icon.svg";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="container h-[53px] pt-[25px] flex justify-between ">
      <div>
        <Link href="/">
          <Image src={logoSvg} alt="logo" />
        </Link>
      </div>
      <li className="flex gap-[50px]">
        <ul>
          <Link href="/">Home</Link>
        </ul>
        <ul>
          <Link href="/shop">Shop</Link>
        </ul>
        <ul>
          <Link href="/">Plant Care</Link>
        </ul>
        <ul>
          <Link href="/">Blogs</Link>
        </ul>
      </li>
      <div className="flex gap-[30px]">
        <img src={searchIconSvg.src} alt="icon" className="w-[20px] h-[20px]" />
        <img
          src={korzinkaIconSvg.src}
          alt="icon"
          className="w-[20px] h-[20px]"
        />
        <button className="bg-[#46a358] p-[10px] flex gap-[2px] items-center rounded-2xl">
          <img
            src={loginBtnIconSvg.src}
            alt="icon"
            className="w-[20px] h-[20px]"
          />
          <p className="font-medium text-[#fff] text-[16px]">Login</p>
        </button>
      </div>
    </div>
  );
};
