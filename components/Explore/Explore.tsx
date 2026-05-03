import Link from "next/link";
import React from "react";
import { RiCornerDownRightLine } from "react-icons/ri";

const Explore = () => {
  return (
    <section className="relative w-full">
      <video
        src="earth_video.mp4"
        className="min-w-full brightness-75 min-h-screen object-cover"
        autoPlay
        loop
      ></video>

      <section className="absolute inset-0 max-w-[1600px] mx-auto pt-[20rem] pb-[10rem] min-h-[105vh] px-[1rem]">
        <section className="2xl:sticky top-[20rem] flex 2xl:flex-row flex-col 2xl:items-start items-center justify-between 2xl:gap-0 gap-[2rem] text-light w-full">
          <section className="flex-1">
            <p className="2xl:text-[2.25rem] text-[1.5rem] text-center 2xl:font-[400] font-[500] leading-[2rem] max-w-[30rem]">
              Explore some of our best work around the world
            </p>
          </section>

          <section className="flex-1 flex flex-col 2xl:items-start items-center justify-center 2xl:gap-[5rem] gap-[1rem] 2xl:ml-[40%]">
            <p className="max-w-[22rem] 2xl:font-[400] font-[500] 2xl:text-left text-center">
              Discover how we transform ideas into reality, fostering
              connections that bridge cultures and celebrate the beauty of human
              interaction.
            </p>

            <Link
              href="/"
              className="flex items-center gap-[1rem] px-[.5rem] py-[.45rem] text-[.8rem] font-[500] bg-light text-dark hover:bg-theme hover:text-white rounded-[.2rem]"
            >
              <RiCornerDownRightLine className="text-[1rem]" />
              Start
            </Link>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Explore;
