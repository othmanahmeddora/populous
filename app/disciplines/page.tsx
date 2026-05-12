"use client";

import Navbar from "@/components/Navbar/Navbar";
import { disciplines } from "@/data/disciplines";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Disciplines = () => {
  const imageRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    imageRefs.current.forEach((image) => {
      gsap.set(image, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        scale: 1,
        opacity: 1,
      });
    });
  }, []);

  const handleImgEnterAnimation = (index: number) => {
    gsap.to(imageRefs.current[index], {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: "power3.inOut",
    });
  };

  const handleImgLeaveAnimation = (index: number) => {
    gsap.to(imageRefs.current[index], {
      scale: 0.75,
      opacity: 0,
      duration: 0.8,
      ease: "power3.inOut",
      onComplete: () => {
        gsap.set(imageRefs.current[index], {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          opacity: 1,
          scale: 1,
        });
      },
    });
  };

  return (
    <section>
      <Navbar navColor="dark" />

      <section className="flex flex-col gap-[10rem] max-w-[1600px] mx-auto xl:pt-[15rem]">
        <h1 className="flex-2 relative xl:text-[8.75rem] text-[1.7rem] tracking-tighter">
          Disciplines
        </h1>

        <section className="relative flex flex-col xl:text-[5rem] text-[1.55rem]">
          {disciplines.map((discipline, index) => (
            <Link
              key={discipline.id}
              href={discipline.link}
              onMouseEnter={() => handleImgEnterAnimation(index)}
              onMouseLeave={() => handleImgLeaveAnimation(index)}
              className="relative flex items-start justify-between md:gap-[1rem] leading-[4rem] tracking-tighter mb-[1rem] group"
            >
              <p className="group-hover:text-theme transition-all ease-out duration-200">
                {discipline.title}
              </p>

              <div className="xl:absolute top-[60%] xl:translate-y-[-50%] left-[-4%] text-[3.5rem] overflow-hidden w-fit">
                <FaArrowRight className="xl:translate-x-[-100%] group-hover:translate-x-[0] group-hover:text-theme transition-all ease-out duration-200" />
              </div>
            </Link>
          ))}
        </section>

        <section className="absolute top-0 right-0 w-[600px] h-full flex flex-col justify-end">
          <section className="sticky bottom-[2rem]">
            {disciplines.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => {
                  imageRefs.current[index] = el!;
                }}
                className={index !== 0 ? "absolute top-0 left-0" : ""}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={500}
                  className="aspect-[16/10]"
                />
              </div>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
};

export default Disciplines;
