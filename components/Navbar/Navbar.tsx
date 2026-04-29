"use client";

import Link from "next/link";
import { useRef, useState } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { IoIosSearch } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const navMenu = useRef(null);
  const bigNavLinks = useRef<(HTMLAnchorElement | null)[]>([]);
  const menuOverlay = useRef(null);

  useGSAP(() => {
    gsap.set(navMenu.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      opacity: 0,
    });
  }, []);

  useGSAP(
    () => {
      if (isActive === undefined) return;

      const tl = gsap.timeline();

      tl.to(navMenu.current, {
        opacity: isActive ? 1 : 0,
        clipPath: isActive
          ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
          : "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 0.8,
        ease: "power4.inOut",
      });

      tl.to(
        menuOverlay.current,
        {
          opacity: isActive ? 1 : 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "<",
      );

      tl.from(bigNavLinks.current, {
        opacity: isActive ? 1 : 0,
        y: isActive ? "100%" : "0",
        duration: 0.4,
        stagger: 0.1,
        ease: "power4.out",
      });
    },
    { dependencies: [isActive] },
  );

  return (
    <nav className="relative w-full z-10 mt-[1rem] px-[1rem]">
      <section className="fixed top-[1rem] left-0 w-full">
        <section className="max-w-[1850px] mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-light text-[1.5rem] font-[500] tracking-[.08em] compress-text-height"
          >
            POPULOUS
          </Link>

          <button
            onClick={() => setIsActive(true)}
            className="p-[1.5rem] cursor-pointer group flex flex-col items-center gap-[.3rem] hover:gap-[.4rem] transition-all ease-out duration-200"
          >
            <span className="w-[2rem] h-[2px] bg-light block"></span>
            <span className="w-[2rem] h-[2px] bg-light block group-hover:w-[1rem] transition-all ease-out duration-200"></span>
          </button>
        </section>
      </section>

      <section
        ref={menuOverlay}
        className="fixed top-0 left-0 h-screen w-screen bg-black/50 opacity-0 z-10 pointer-events-none"
      ></section>
      <section
        ref={navMenu}
        className="fixed top-[1.5rem] right-[1.5rem] [clip-path:polygon(0%_0%,100%_0%,100%_0%,0%_0%)] z-20 bg-light rounded-[.5rem] h-[95%] w-[50%]"
      >
        <TfiClose
          onClick={() => setIsActive(false)}
          className="absolute top-[1rem] right-[1rem] text-[1.5rem] cursor-pointer"
        />
        <section className="flex flex-col items-start justify-between h-full p-[1rem]">
          <section className="flex items-start justify-between w-full h-full">
            <nav className="flex-1 flex flex-col gap-0 text-[3rem] leading-[3rem] h-full">
              <div className="overflow-hidden h-[3.5rem]">
                <Link
                  ref={(el) => {
                    bigNavLinks.current[0] = el;
                  }}
                  href="/"
                  className="hover:underline w-fit block"
                >
                  Explore
                </Link>
              </div>

              <div className="overflow-hidden h-[3.5rem]">
                <Link
                  ref={(el) => {
                    bigNavLinks.current[1] = el;
                  }}
                  href="/"
                  className="hover:underline w-fit block"
                >
                  Projects
                </Link>
              </div>

              <div className="overflow-hidden h-[3.5rem]">
                <Link
                  ref={(el) => {
                    bigNavLinks.current[2] = el;
                  }}
                  href="/"
                  className="hover:underline w-fit block"
                >
                  Disciplines
                </Link>
              </div>
            </nav>

            <button className="flex-1 flex items-center gap-[.5rem]">
              <span className="hover:underline font-[400]">Search</span>{" "}
              <IoIosSearch className="w-[1rem]" />
            </button>
          </section>

          <section className="flex flex-col gap-[2rem] w-full">
            <section className="flex items-start justify-between w-full">
              <section className="flex-1 font-[500] text-light-gray">
                Who we are
              </section>

              <nav className="flex-1 flex flex-col font-[500] leading-[1.4rem]">
                <Link className="hover:underline" href="/">
                  About
                </Link>
                <Link className="hover:underline" href="/">
                  Team
                </Link>
                <Link className="hover:underline" href="/">
                  Careers
                </Link>
              </nav>
            </section>

            <section className="flex items-start justify-between w-full">
              <section className="flex-1 font-[500] text-light-gray">
                Impact
              </section>

              <nav className="flex-1 flex flex-col font-[500] leading-[1.4rem]">
                <Link className="hover:underline" href="/">
                  Sustainability
                </Link>
                <Link className="hover:underline" href="/">
                  Digital Future
                </Link>
                <Link className="hover:underline" href="/">
                  News
                </Link>
                <Link className="hover:underline" href="/">
                  Contact
                </Link>
              </nav>
            </section>
          </section>
        </section>
      </section>

      <section className="absolute top-[1rem] right-[10rem] text-light text-[1rem] font-[500] flex items-start gap-[17rem]">
        <section className="flex flex-col">
          <Link href="/" className="hover:underline">
            Projects
          </Link>
          <Link href="/" className="hover:underline">
            Explore
          </Link>
          <Link href="/" className="hover:underline">
            Disciplines
          </Link>
        </section>

        <section className="flex flex-col">
          <Link href="/" className="hover:underline">
            Sustainability
          </Link>
          <Link href="/" className="hover:underline">
            Digital Future
          </Link>
          <Link href="/" className="hover:underline">
            Careers
          </Link>
        </section>

        <button className="flex items-center gap-[.5rem]">
          <span className="hover:underline">Search</span>{" "}
          <IoIosSearch className="w-[1rem]" />
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
