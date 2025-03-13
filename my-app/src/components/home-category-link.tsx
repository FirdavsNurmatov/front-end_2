import React from "react";
import navigationIcon from "/public/home/navigation-icon.svg";

export const HomeCategoryLink = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-between items-center py-[16px]">
      <p>{text}</p>
      <img src={navigationIcon.src} alt="icon" />
    </div>
  );
};
