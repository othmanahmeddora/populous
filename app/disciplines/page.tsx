"use client";

import Navbar from "@/components/Navbar/Navbar";
import { disciplines } from "@/data/disciplines";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { disciplineAccordion } from "@/data/disciplineAccordion";
import { IoMdClose } from "react-icons/io";
import {
  RiArrowLeftLongLine,
  RiArrowRightLongLine,
  RiCornerDownRightLine,
} from "react-icons/ri";
import CTA from "@/components/CTA/CTA";

const Disciplines = () => {
  const imageRefs = useRef<HTMLDivElement[]>([]);

  const [open, setOpen] = useState<Set<number>>(new Set());
  const [slider, setSlider] = useState(0);

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

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <section>
      <Navbar navColor="dark" />

      <section className="flex flex-col xl:gap-[10rem] gap-[5rem] max-w-[1600px] mx-auto xl:pt-[15rem] pt-[10rem] px-[1rem]">
        <h1 className="flex-2 relative xl:text-[8.75rem] text-[1.7rem] tracking-tighter">
          Disciplines
        </h1>

        <section className="relative flex gap-[2rem]">
          <section className="flex-1 flex flex-col xl:text-[5rem] text-[1.55rem]">
            {disciplines.map((discipline, index) => (
              <Link
                key={discipline.id}
                href={discipline.link}
                onMouseEnter={() => handleImgEnterAnimation(index)}
                onMouseLeave={() => handleImgLeaveAnimation(index)}
                className="relative flex items-start justify-between md:gap-[1rem] xl:leading-[4rem] leading-[1.5rem] tracking-tighter mb-[1rem] group"
              >
                <p className="group-hover:text-theme transition-all ease-out duration-200">
                  {discipline.title}
                </p>

                <div className="xl:absolute top-[60%] xl:translate-y-[-50%] left-[-4%] xl:text-[3.5rem] text-[1rem] overflow-hidden w-fit">
                  <FaArrowRight className="xl:translate-x-[-100%] group-hover:translate-x-[0] group-hover:text-theme transition-all ease-out duration-200" />
                </div>
              </Link>
            ))}
          </section>

          <section className="absolute top-0 right-[2rem] w-[600px] h-full flex flex-col justify-end">
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

        <section>
          <h1 className="flex-2 relative text-[2.25rem] tracking-tighter mb-[2rem]">
            Our Companies
          </h1>

          {disciplineAccordion.map((item, i) => (
            <section
              key={i}
              className="border-t border-t-light-gray overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={open.has(i)}
                className="w-full flex justify-between items-center py-[.5rem] text-left font-medium cursor-pointer"
              >
                <h2 className="text-[1.2rem]">{item.title}</h2>
                <IoMdClose
                  className={`transition-transform duration-300 text-gray-400 ${open.has(i) ? "" : "rotate-45"}`}
                />
              </button>

              <section
                className={`flex flex-col 2xl:flex-row items-start justify-between transition-all duration-300 ease-in-out ${open.has(i) ? "max-h-[100vh]" : "max-h-0"}`}
              >
                <section className="flex-1 xl:flex 2xl:flex-col flex-row justify-between w-full">
                  <p className="pb-[1rem] pt-[.5rem] max-w-[30rem] flex flex-col items-start gap-[1rem]">
                    {item.texts.map((item) => (
                      <p key={item.id}>{item.text}</p>
                    ))}
                  </p>

                  <Image
                    src={item.logoSrc}
                    alt={item.title}
                    width={500}
                    height={250}
                    className="max-w-[12rem] h-full py-[.5rem]"
                  />
                </section>

                <section className="flex-1 relative w-full overflow-hidden flex mb-[2rem]">
                  {item.images.map((img) => (
                    <Image
                      key={img.id}
                      src={img.src}
                      alt={img.src}
                      width={500}
                      height={500}
                      className="w-full h-[37rem] object-cover"
                      style={{ transform: `translateX(${slider * -100}%)` }}
                    />
                  ))}

                  <section className="absolute bottom-[.5rem] left-[.5rem] flex md:flex-row flex-col items-start xl:justify-start justify-between w-full xl:ga gap-[1rem]">
                    <section className="flex items-center gap-[1rem]">
                      <button
                        className={`p-[.5rem] rounded-[.2rem] ${slider === 0 ? "bg-light/40" : "hover:bg-theme hover:text-light bg-l"}`}
                        onClick={() => {
                          if (slider <= 1) {
                            setSlider(0);
                          } else {
                            setSlider(slider - 1);
                          }
                        }}
                      >
                        <RiArrowLeftLongLine />
                      </button>

                      <button
                        className={`p-[.5rem] rounded-[.2rem] ${slider === item.images.length - 1 ? "bg-light/40" : "hover:bg-theme hover:text-light bg-light"}`}
                        onClick={() => {
                          if (slider >= item.images.length - 1) {
                            setSlider(item.images.length - 1);
                          } else {
                            setSlider(slider + 1);
                          }
                        }}
                      >
                        <RiArrowRightLongLine />
                      </button>
                    </section>

                    <Link
                      href={item.logoLink}
                      target="_blank"
                      className="flex items-center gap-[1rem] px-[.5rem] mr-[1rem] py-[.45rem] text-[.8rem] font-[500] bg-light hover:bg-theme hover:text-white rounded-[.2rem]"
                    >
                      <RiCornerDownRightLine className="text-[1rem]" />
                      {item.title}
                    </Link>
                  </section>
                </section>
              </section>
            </section>
          ))}
        </section>
      </section>

      <CTA />
    </section>
  );
};

export default Disciplines;
