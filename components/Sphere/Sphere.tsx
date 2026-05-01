import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiCornerDownRightLine } from "react-icons/ri";

const Sphere = () => {
  return (
    <section className="relative">
      <Image
        src="/img/10031.jpg"
        alt="sphere"
        width={500}
        height={500}
        className="w-full brightness-75"
      />

      <section className="absolute inset-0 max-w-[1600px] mx-auto pt-[20rem] pb-[10rem] min-h-[130vh] px-[1rem]">
        <section className="sticky top-[20rem] flex items-start justify-between text-light w-full">
          <p className="text-[2.25rem] flex-1">Sphere</p>

          <section className="flex-1 flex items-center justify-center">
            <Link
              href="/"
              className="w-fit flex items-center gap-[1rem] px-[.5rem] py-[.45rem] text-[.8rem] font-[500] bg-light text-dark hover:bg-theme hover:text-white rounded-[.2rem]"
            >
              <RiCornerDownRightLine className="text-[1rem]" />
              View Project
            </Link>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Sphere;
