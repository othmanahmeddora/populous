"use client";

import { useState } from "react";

import { FaPlay } from "react-icons/fa";
import { TfiClose } from "react-icons/tfi";

const About = () => {
  const [isPlay, setIsPlay] = useState(false);

  return (
    <section className="relative bg-light w-full">
      <section className="max-w-[1600px] flex items-start justify-between mx-auto pt-[2rem] pb-[5rem] px-[1rem]">
        <p className="flex-1 max-w-[30rem] text-[1.75rem] font-[400] leading-[2rem]">
          We’re a global design firm with colleagues spanning four continents
          creating experiences that amplify the joy felt in shared human
          moments.
        </p>

        <button
          className="cursor-pointer group"
          onClick={() => setIsPlay(true)}
        >
          <section className="relative overflow-hidden">
            <video
              src="/hero_video.mp4"
              className="w-[25rem] brightness-75 group-hover:scale-105 group-hover:brightness-100 transition-all ease-out duration-200"
            ></video>

            <button className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-[1rem] bg-light rounded-[.25rem]">
              <FaPlay className="w-[.75rem] h-[.75rem]" />
            </button>
          </section>

          <section className="flex items-center justify-between">
            <p className="font-[500] text-[.8rem]">
              watch our mission in action
            </p>
            <p className="font-[400] text-[.75rem]">60 sec.</p>
          </section>
        </button>
      </section>

      {isPlay && (
        <section
          className="fixed top-0 left-0 h-screen w-screen bg-dark/90 z-[20]"
          onClick={() => setIsPlay(false)}
        >
          <TfiClose className="absolute top-[1.5rem] right-[3rem] text-[2rem] cursor-pointer text-light" />

          <video
            src="/hero_video.mp4"
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            controls
            autoPlay
          ></video>
        </section>
      )}
    </section>
  );
};

export default About;
