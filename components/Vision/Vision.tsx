import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiCornerDownRightLine } from "react-icons/ri";

const Vision = () => {
  return (
    <section className="bg-light xl:pb-[5rem] px-[1rem]">
      <section className="max-w-[1600px] mx-auto flex flex-col 2xl:gap-[10rem] gap-[5rem]">
        <section className=" flex xl:flex-row flex-col items-start justify-between gap-[1rem]">
          <Image
            src="/img/10014.jpg"
            alt="Populous project"
            width={500}
            height={500}
            className="flex-1 rounded-[.2rem]"
          />

          <section className="relative flex-1">
            <h2 className="text-[2.25rem] leading-[2.5rem] font-[400] 2xl:mb-0 mb-[1rem]">
              Crafting a <br /> Sustainable Future
            </h2>

            <section className="2xl:absolute top-[500%] left-[50%]">
              <p className="max-w-[18rem] mb-[1rem]">
                Populous has been at the forefront of environmentally
                sustainable design solutions for public assembly venues since
                the formation of our practice.
              </p>

              <Link
                href="/"
                className="w-fit flex items-center gap-[1rem] px-[.5rem] py-[.45rem] text-[.8rem] font-[500] bg-dark text-light hover:bg-theme hover:text-white rounded-[.2rem]"
              >
                <RiCornerDownRightLine className="text-[1rem]" />
                Sustainability
              </Link>
            </section>
          </section>
        </section>

        <section className=" flex xl:flex-row-reverse flex-col items-start justify-between gap-[1rem]">
          <Image
            src="/img/10015.webp"
            alt="Populous project"
            width={500}
            height={500}
            className="flex-1 rounded-[.2rem]"
          />

          <section className="relative flex-1">
            <h2 className="text-[2.25rem] leading-[2.5rem] font-[400] 2xl:mb-0 mb-[1rem]">
              We Can&#39;t <br /> Without You
            </h2>

            <section className="2xl:absolute top-[500%] left-[50%]">
              <p className="max-w-[18rem] mb-[1rem]">
                Populous has been at the forefront of environmentally
                sustainable design solutions for public assembly venues since
                the formation of our practice.
              </p>

              <Link
                href="/"
                className="w-fit flex items-center gap-[1rem] px-[.5rem] py-[.45rem] text-[.8rem] font-[500] bg-dark text-light hover:bg-theme hover:text-white rounded-[.2rem]"
              >
                <RiCornerDownRightLine className="text-[1rem]" />
                Sustainability
              </Link>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Vision;
