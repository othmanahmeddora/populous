"use client";

import { useRef, useState } from "react";
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
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [isHovering, setIsHovering] = useState(false);

  const projectsHeader = useRef(null);
  const projectsCounter = useRef(null);

  useGSAP(() => {
    ScrollTrigger.refresh();

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
  return (
    <section className="bg-light">
      <Navbar navColor="dark" />

      <section className="pt-[15rem]">
        <section className="sticky top-0 h-full bg-light/60 backdrop-blur-sm z-10">
          <section className="flex flex-col max-w-[1600px] mx-auto pt-[2.5rem]">
            <section className="flex items-end justify-between pb-[5rem]">
              <h1
                ref={projectsHeader}
                className="flex-2 relative text-[8.75rem] tracking-tighter"
              >
                Projects{" "}
                {/* <span
                  ref={projectsCounter}
                  className="absolute text-[1rem] top-[5rem] right-[20rem] font-medium tracking-normal"
                >
                  (288)
                </span> */}
              </h1>

              <section className="flex-1">
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
              </p>
            </section>

            <section className="flex items-center justify-between">
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
                onMouseEnter={() => {
                  setActiveProject(project);
                  setIsHovering(true);
                }}
                onMouseLeave={() => setIsHovering(false)}
                className="hover:bg-gray-300 transition-all duration-700 ease-out"
              >
                <section
                  className={`max-w-[1600px] mx-auto flex flex-col ${index === 0 ? "mt-[5rem]" : ""}`}
                >
                  <section className="flex items-center justify-between pl-[.9rem]">
                    <p className="flex-2">{project.title}</p>
                    <p className="flex-1">{project.location}</p>
                    <p className="flex-1">{project.date}</p>
                  </section>
                </section>
              </section>
            ))}
          </section>

          <section className="absolute top-0 right-[2rem] w-[400px] h-full pointer-events-none flex flex-col justify-end">
            <section className="sticky bottom-[2rem]">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                width={500}
                height={500}
                className={`transition-[clip-path] duration-700 ease-out ${
                  isHovering
                    ? "[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]"
                    : "[clip-path:polygon(0%_100%,100%_100%,100%_100%,0%_100%)]"
                }`}
              />
            </section>
          </section>
        </section>
      </section>

      <CTA />
    </section>
  );
};

export default Page;
