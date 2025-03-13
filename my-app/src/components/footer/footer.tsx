import React from "react";
import logo from "/public/logo.svg";
import playMarketIcon from "/public/footer/play-market-icon.svg";
import appStoreIcon from "/public/footer/app-store-icon.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="py-[30px] px-[80px] flex justify-around">
      <div>
        <img src={logo.src} alt="logo" />
        <p className="font-medium text-[19px] pt-[22px] leading-[150%] text-[#000]">
          HilalMart © 2021
        </p>
        <p className="font-normal text-[15px]  pb-[16px] leading-[150%] text-[#000]">
          Barcha huquqlar kafolatlangan
        </p>
        <div className="flex gap-[12px]">
          <img src={playMarketIcon.src} alt="icon" />
          <img src={appStoreIcon.src} alt="icon" />
        </div>
      </div>
      <div>
        <p className="mb-[16px] font-semibold text-[19px] leading-[120%]">
          Foydali havolalar
        </p>
        <ul>
          <li>
            <Link href={"/"}>Bosh sahifa</Link>
          </li>
          <li>
            <Link href={"/"}>Yordam kerakmi?</Link>
          </li>
          <li>
            <Link href={"/"}>Foydalanish shartlari</Link>
          </li>
          <li>
            <Link href={"/"}>Maxfiylik siyosati</Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="mb-[16px] font-semibold text-[19px] leading-[120%]">
          Biz haqimizda
        </p>
        <ul>
          <li>
            Manzil: #214, G-dong, Lotte castle, 347 Jongno, Jongno-gu, Seoul,
            03113, Crescent Trade ltd
          </li>
          <li>Korxona nomi: Korxona nomi:</li>
          <li>Korxona rahbari: DADAJONOV RAKHIMJON</li>
          <li>Registratsiya raqami: 433-62-00377</li>
          <li>Telefon raqam: 1833-2178 02-3670-6808</li>
        </ul>
      </div>
    </div>
  );
};
