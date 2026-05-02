import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section className="bg-light xl:py-[10rem] py-[5rem]">
      <section className="max-w-[1600px] mx-auto px-[1rem] flex flex-col xl:gap-[4rem] gap-[2rem]">
        <Link
          href="/"
          className="flex xl:flex-row flex-col items-start justify-between xl:gap-[1rem] gap-[2rem] group"
        >
          <h2 className="flex-1 text-[1.7rem]">Featured Projects</h2>

          <section className="flex-1">
            <Image
              src="/img/10030.jpg"
              alt="KAi Tak Sports Park"
              width={500}
              height={500}
              className="w-full rounded-[.2rem]"
            />

            <section className="flex items-start justify-between mt-[.5rem]">
              <p className="group-hover:underline">KAi Tak Sports Park</p>
              <p>2025</p>
            </section>
          </section>
        </Link>

        <Link
          href="/"
          className="flex xl:flex-row flex-col items-start justify-between group"
        >
          <section className="flex-1">
            <Image
              src="/img/10012.jpg"
              alt=""
              width={500}
              height={500}
              className="w-full rounded-[.2rem]"
            />
            <section className="flex items-start justify-between mt-[.5rem]">
              <p className="group-hover:underline">Tottenham Hotspur Stadium</p>
              <p>2019</p>
            </section>
          </section>

          <section className="flex-1"></section>
        </Link>

        <Link
          href="/"
          className="flex flex-col items-start justify-between group"
        >
          <Image
            src="/img/10013.jpg"
            alt=""
            width={500}
            height={500}
            className="w-full rounded-[.2rem]"
          />

          <section className="flex items-start justify-between w-full mt-[.5rem]">
            <p className="group-hover:underline">BMO Center</p>
            <p>2024</p>
          </section>
        </Link>
      </section>
    </section>
  );
};

export default Projects;
