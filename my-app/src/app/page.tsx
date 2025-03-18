import { HomeCategoryLink } from "@/components/home-category-link";
import { Metadata } from "next";
import newIcon from "/public/home/new-icon.svg";
import { Card } from "@/components/card";

export const metadata: Metadata = {
  title: "Hilal Mart",
  description: "Koreyadagi eng ishonchli o'zbekcha halol market",
};

const categories = [
  { text: "🇺🇿 O’zbekistonga yetkazish" },
  { text: "Go'sht va Baliq" },
  { text: "Asosiy oziq-ovqatlar" },
  { text: "Tayyor oziq-ovqatlar" },
  { text: "Ichimliklar" },
  { text: "Mobil telefon va kompyuter..." },
  { text: "Go'zallik & Sog'lik" },
  { text: "Oilaviy do'kon" },
  { text: "Kitoblar" },
  { text: "Shirinliklar" },
];

export default function Home() {
  return (
    <>
      <div className="flex">
        <div className="w-[280px]  ">
          <div className="pl-[30px] pr-[20px] flex flex-col gap-[17px]">
            {categories.map((category, index) => (
              <HomeCategoryLink key={index} text={category.text} />
            ))}
          </div>
        </div>
        <div className="grow bg-bg px-[20px]">
          <div>
            <div className="flex items-center gap-[17px]  p-[30px]">
              <img src={newIcon.src} alt="icon" />
              <p className="font-bold text-[32px] leading-[75%]">Yangi</p>
            </div>
            <div className="grid grid-cols-4 gap-[20px] pb-2">
              <Card text={"Qo'y bo'yin (muzlatilgan)"} price={7040} />
              <Card text={"Qo'y bo'yin (muzlatilgan)"} price={8040} />
              <Card text={"Qo'y bo'yin (muzlatilgan)"} price={9040} />
              <Card text={"Qo'y bo'yin (muzlatilgan)"} price={10040} />
              <Card text={"Qo'y bo'yin (muzlatilgan)"} price={10040} />
              <Card text={"Qo'y bo'yin (muzlatilgan)"} price={10040} />
              <Card text={"Qo'y bo'yin (muzlatilgan)"} price={10040} />
              <Card text={"Qo'y bo'yin (muzlatilgan)"} price={10040} />
              <Card text={"Qo'y bo'yin (muzlatilgan)"} price={10040} />
              <Card text={"Qo'y bo'yin (muzlatilgan)"} price={10040} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
