import Link from "next/link";
import PostWrapper from "@/components/postswrapper";
import { SliderCard } from "@/components/slider-card";

const categories = [
  "House Plants",
  "Potter Plants",
  "Seeds",
  "Small Plants",
  "Big Plants",
  "Succulents",
  "Trerrariums",
  "Gardening",
  "Accessories",
];

export default function Home() {
  return (
    <div className="container">
      <section className="slider">
        <SliderCard />
      </section>
      <div className="flex mt-[26px] gap-[40px]">
        <div className="w-[310px]">
          <p>Categories</p>
          <div className="pl-5">
            {categories.map((category, index) => (
              <Link href={"/"} key={index} className=" block">
                <p>{category}</p>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <PostWrapper />
        </div>
      </div>
    </div>
  );
}
