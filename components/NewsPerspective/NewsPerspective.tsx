"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { RiArrowRightLongLine } from "react-icons/ri";
import { RiCornerDownRightLine } from "react-icons/ri";
import { RiArrowLeftLongLine } from "react-icons/ri";
import { newsPerspective } from "@/data/news";

const NewsPerspective = () => {
  const [slider, setSlider] = useState(0);
  console.log("slider value: ", slider);
  console.log("news length", newsPerspective.length - 1);

  return (
    <section className="bg-light py-[5rem] w-full overflow-hidden">
      <section className="max-w-[1600px] mx-auto">
        <section className="flex items-center justify-between mb-[1rem]">
          <h2 className="font-[400] text-[1.75rem]">News & Perspectives</h2>

          <section className="flex items-center gap-[.5rem]">
            <button
              className="border border-dark p-[.5rem] rounded-[.2rem]"
              onClick={() => {
                if (slider <= 1) {
                  setSlider(0);
                  console.log("left slider: ", slider);
                } else {
                  setSlider(slider - 2);
                  console.log("left slider: ", slider);
                }
              }}
            >
              <RiArrowLeftLongLine />
            </button>

            <button
              className="border border-dark p-[.5rem] rounded-[.2rem]"
              onClick={() => {
                if (slider + 2 >= newsPerspective.length - 1) {
                  setSlider(newsPerspective.length - 2);
                } else {
                  setSlider(slider + 2);
                }
              }}
            >
              <RiArrowRightLongLine />
            </button>
            <Link
              href="/"
              className="flex items-center gap-[1rem] px-[.5rem] py-[.45rem] text-[.8rem] font-[500] hover:bg-theme hover:text-white rounded-[.2rem]"
            >
              <RiCornerDownRightLine className="text-[1rem]" />
              View all
            </Link>
          </section>
        </section>

        <section className="flex items-center w-full">
          {newsPerspective.map((item) => (
            <Link
              key={item.id}
              href="/"
              style={{ transform: `translateX(${slider * -102}%)` }}
              className="flex-shrink-0 w-[49.5%] mr-[1%] relative group transition-transform duration-500 ease-out"
            >
              <span className="absolute top-[1rem] left-[1rem] px-[.5rem] py-[.2rem] bg-light rounded-[.2rem] text-[.8rem] font-[500] z-[5]">
                {item.type}
              </span>

              <section className="overflow-hidden">
                <Image
                  src={item.thumbNail}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="w-full h-full rounded-[.2rem] group-hover:scale-105 transition-all ease-out duration-700"
                />
              </section>

              <p className="mt-[.5rem] text-[.8rem] font-[400]">{item.date}</p>

              <h3 className="mt-[.5rem] text-[1.25rem] font-[500] group-hover:underline tracking-tighter">
                {item.title}
              </h3>
            </Link>
          ))}
        </section>
      </section>
    </section>
  );
};

export default NewsPerspective;
