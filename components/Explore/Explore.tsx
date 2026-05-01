import Link from "next/link";
import React from "react";
import { RiCornerDownRightLine } from "react-icons/ri";

const Explore = () => {
  return (
    <section className="relative w-full">
      <video
        src="earth_video.mp4"
        className="w-full brightness-75"
        autoPlay
        loop
      ></video>

      <section className="absolute inset-0 max-w-[1600px] mx-auto pt-[20rem] pb-[10rem] min-h-[130vh]">
        <section className="sticky top-[20rem] flex items-start justify-between text-light w-full">
          <p className="text-[2.25rem] max-w-[35rem]">
            Explore some of our best work around the world
          </p>

          <section className="flex flex-col items-start gap-[5rem]">
            <p className="max-w-[22rem]">
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
