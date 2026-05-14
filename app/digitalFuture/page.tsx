import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const DigitalFuture = () => {
  return (
    <section>
      <Navbar />

      <section className="flex flex-col xl:gap-[10rem] gap-[5rem]">
        <section className="relative bg-[url(/img/10180.jpg)] bg-cover before:absolute before:inset-0 before:bg-black/35">
          <section className="relative z-10 max-w-[1600px] px-[1rem] mx-auto pt-[25rem] pb-[2rem] flex flex-col justify-between gap-[10rem] xl:gap-[30rem]">
            <h1
              className="text-center text-light xl:text-[8.75rem] text-[4rem] tracking-tighter xl:leading-[9rem] leading-[4.5rem] mb-[20rem] xl:mb-0"
              data-scroll
              data-scroll-speed={0.1}
            >
              Digital Future
            </h1>

            <section className="flex items-start w-full">
              <p
                className="w-full xl:w-1/2 text-[2.25rem] text-light leading-[2.5rem] tracking-tighter"
                data-scroll
                data-scroll-speed={0.1}
              >
                Our projects are often vast in scale, which means they can take
                years to reach completion. With the speed at which technology
                advances, there is a danger that these venues might be outdated
                before the first visitors have even taken their seat.
              </p>
            </section>

            <section className="flex items-start justify-end w-full">
              <p
                className="w-full xl:w-1/2 text-[2.25rem] text-light leading-[2.5rem] tracking-tighter"
                data-scroll
                data-scroll-speed={0.05}
              >
                Our Digital Futures team is a collection of forward-thinking
                designers who explore and create new technologies that propel
                our designs into exciting new frontiers, and result in buildings
                that not only stand the test of time but define the future.
              </p>
            </section>
          </section>
        </section>

        {/* About */}
        <section className="max-w-[1600px] mx-auto w-full px-[1rem] flex flex-col gap-[3rem] z-10">
          <p className="text-[2.25rem] text-left max-w-[55rem] tracking-tighter leading-[2.75rem]">
            For over 40 years, Populous has been a driving force for innovation
            in sports and entertainment, consistently raising the bar with each
            new venue, space and event that we create. Through our ongoing
            exploration of the digital realm, we have maintained a position of
            leadership, while propelling the advancement of technology in our
            industry.
          </p>

          <p className="text-[2.25rem] text-left max-w-[55rem] tracking-tighter leading-[2.75rem]">
            Our team is focused on cutting-edge digital products, leveraging our
            Intellectual Property through big data management, analysis-driven
            design, and the incorporation of new generative processes.
          </p>
        </section>

        {/* Sustainable Legacy */}
        <section className="w-full max-w-[1600px] mx-auto px-[1rem] flex flex-col xl:gap-[4rem] gap-[2rem]">
          <section className="flex xl:flex-row flex-col items-start justify-between xl:gap-[1rem] gap-[2rem] group">
            <h2 className="flex-1 text-[1.7rem]">Featured Projects</h2>

            <Link href="" className="flex-1">
              <Image
                src="/img/10182.jpg"
                alt="KAi Tak Sports Park"
                width={500}
                height={500}
                className="w-full rounded-[.2rem]"
              />

              <section className="flex items-start justify-between mt-[.5rem]">
                <p className="group-hover:underline">KAi Tak Sports Park</p>
                <p>2025</p>
              </section>
            </Link>
          </section>

          <section className="flex xl:flex-row flex-col items-start justify-between group">
            <Link href="" className="flex-1">
              <Image
                src="/img/10181.jpg"
                alt=""
                width={500}
                height={500}
                className="w-full rounded-[.2rem]"
              />
              <section className="flex items-start justify-between mt-[.5rem]">
                <p className="group-hover:underline">Sphere</p>
                <p>2023</p>
              </section>
            </Link>

            <section className="flex-1"></section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default DigitalFuture;
