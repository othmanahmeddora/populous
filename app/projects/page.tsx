"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/components/Navbar/Navbar";
import CTA from "@/components/CTA/CTA";

import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

import { projects } from "@/data/projects";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page = () => {
  const projectsHeader = useRef(null);
  const projectsCounter = useRef(null);
  const projectRefs = useRef<HTMLElement[]>([]);
  const imageRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    ScrollTrigger.refresh();

    imageRefs.current.forEach((image) => {
      gsap.set(image, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        scale: 1,
        opacity: 1,
      });
    });

    gsap.to(projectsHeader.current, {
      fontSize: "1.7rem",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "300px top",
        scrub: 0.5,
      },
    });

    gsap.to(projectsCounter.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "300px top",
        scrub: 0.5,
      },
    });
  }, []);

  const handleBGEnterAnimation = (index: number) => {
    gsap.to(projectRefs.current[index], {
      backgroundColor: "#E0DDDD",
      duration: 0,
      ease: "power3.inOut",
    });
  };

  const handleBGLeaveAnimation = (index: number) => {
    gsap.to(projectRefs.current[index], {
      backgroundColor: "#fff",
      duration: 0.2,
      ease: "power3.inOut",
    });
  };

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
    <section className="bg-light">
      <Navbar navColor="dark" />

      <section className="xl:pt-[15rem] pt-[10rem] px-[1rem]">
        <section className="xl:sticky top-0 h-full bg-light/60 backdrop-blur-sm z-10">
          <section className="flex flex-col max-w-[1600px] mx-auto xl:pt-[2.5rem]">
            <section className="flex items-end justify-between xl:pb-[5rem] pb-[1rem]">
              <h1
                ref={projectsHeader}
                className="flex-2 relative xl:text-[8.75rem] text-[1.7rem] tracking-tighter"
              >
                Projects{" "}
                {/* <span
                  ref={projectsCounter}
                  className="absolute text-[1rem] top-[5rem] right-[20rem] font-medium tracking-normal"
                >
                  (288)
                </span> */}
              </h1>

              {/* <section className="flex-1">
                <Link href="" className="w-fit text-light-gray text-[1.7rem]">
                  <p className="hover:text-dark transition-all duration-200 ease-out">
                    Collections
                  </p>
                </Link>
              </section>

              <p className="flex-1 relative flex items-center justify-end text-[1.7rem] tracking-tighter">
                Filters{" "}
                <span className="absolute text-[1rem] top-0 right-[-1.5rem] font-medium tracking-normal">
                  (0)
                </span>
              </p> */}
            </section>

            <section className="xl:flex hidden items-center justify-between">
              <button className="flex-2 flex items-center gap-[.15rem] text-[.625rem] uppercase font-medium px-[.9rem] py-[.3rem] rounded-full">
                Name{" "}
                <span className="flex flex-col items-center justify-content-center">
                  <FaCaretUp />
                  <FaCaretDown className="mt-[-.4rem]" />
                </span>
              </button>

              <button className="flex-1 flex items-center gap-[.15rem] text-[.625rem] uppercase font-medium px-[.9rem] py-[.3rem] rounded-full">
                Location{" "}
                <span className="flex flex-col items-center justify-content-center">
                  <FaCaretUp />
                  <FaCaretDown className="mt-[-.4rem]" />
                </span>
              </button>

              <button className="flex-1 flex items-center gap-[.15rem] text-[.625rem] uppercase font-medium px-[.9rem] py-[.3rem] rounded-full">
                Year{" "}
                <span className="flex flex-col items-center justify-content-center">
                  <FaCaretUp />
                  <FaCaretDown className="mt-[-.4rem]" />
                </span>
              </button>
            </section>
          </section>
        </section>

        <section className="relative">
          <section>
            {projects.map((project, index) => (
              <section
                key={project.id}
                ref={(el) => {
                  projectRefs.current[index] = el!;
                }}
                onMouseEnter={() => {
                  handleBGEnterAnimation(index);
                  handleImgEnterAnimation(index);
                }}
                onMouseLeave={() => {
                  handleBGLeaveAnimation(index);
                  handleImgLeaveAnimation(index);
                }}
                className="cursor-pointer"
              >
                <section
                  className={`max-w-[1600px] mx-auto flex flex-col ${index === 0 ? "mt-[5rem]" : ""}`}
                >
                  <section className="flex items-start justify-between pl-[.9rem] xl:font-[500] font-[400] border-t border-t-light-gray pt-[.5rem] leading-[2rem]">
                    <section className="flex-[3] flex xl:flex-row flex-col-reverse">
                      <p className="flex-2 xl:text-[1rem] text-[1.35rem] xl:mb-0 mb-[1rem]">
                        {project.title}
                      </p>
                      <p className="flex-1 xl:text-[1rem] text-[.8rem]">
                        {project.location}
                      </p>
                    </section>
                    <p className="flex-1 text-right xl:text-left">
                      {project.date}
                    </p>
                  </section>
                </section>
              </section>
            ))}
          </section>

          <section className="absolute top-0 right-[2rem] w-[400px] h-full flex flex-col justify-end">
            <section className="sticky bottom-[2rem]">
              {projects.map((project, index) => (
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
                    className="aspect-[16/9]"
                  />
                </div>
              ))}
            </section>
          </section>
        </section>
      </section>

      <CTA />
    </section>
  );
};

export default Page;
