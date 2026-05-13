import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const Sustainability = () => {
  return (
    <section>
      <Navbar />

      <section className="flex flex-col gap-[10rem]">
        <section className="relative bg-[url(/img/10014.jpg)] bg-cover before:absolute before:inset-0 before:bg-black/35">
          <section className="relative z-10 max-w-[1600px] px-[1rem] mx-auto pt-[25rem] pb-[2rem] flex flex-col justify-between gap-[30rem]">
            <h1
              className="text-center text-light text-[8.75rem] tracking-tighter leading-[9rem]"
              data-scroll
              data-scroll-speed={0.1}
            >
              Creating a Sustainable Future
            </h1>

            <section className="flex items-start justify-between w-full">
              <p
                className="flex-1 text-[2.25rem] text-light leading-[2.5rem] tracking-tighter"
                data-scroll
                data-scroll-speed={0.1}
              >
                Every day, our work at Populous tells the world a story about
                who we are and what we believe.
              </p>

              <section className="flex-1"></section>
            </section>

            <section className="flex items-start justify-between w-full">
              <section className="flex-1"></section>

              <p
                className="flex-1 text-[2.25rem] text-light leading-[2.5rem] tracking-tighter"
                data-scroll
                data-scroll-speed={0.05}
              >
                As designers, we have the unique privilege of reimagining the
                world we share, and we see firsthand the power that our work can
                have toward the betterment of people, places and the planet.
              </p>
            </section>
          </section>
        </section>

        <section className="max-w-[1600px] mx-auto w-full px-[1rem] z-10">
          <p className="text-[2.25rem] text-left w-[55rem] tracking-tighter leading-[2.75rem]">
            Populous has been at the forefront of environmentally sustainable
            design solutions for public assembly venues since the formation of
            our practice. The future of venue design and events is an
            environmentally sustainable one, and we are committed to producing
            outcomes that are world-leading in reducing their impact on our
            environment, with an end goal of regenerative and climate-positive
            venues.
          </p>
        </section>

        <section className="max-w-[1600px] mx-auto">
          <video
            src="/videos/sustainable-design.mp4"
            className="rounded-[.6rem]"
            controls
          ></video>
        </section>
      </section>
    </section>
  );
};

export default Sustainability;
