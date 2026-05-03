"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { IoIosSearch } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";
import Image from "next/image";
import { subNavLinks } from "@/data/sub-navLinks";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [menuPosition, setMenuPosition] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  const navMenu = useRef(null);
  const navLogo = useRef(null);
  const bigNavLinks = useRef<(HTMLAnchorElement | null)[]>([]);
  const menuOverlay = useRef(null);
  const topBar = useRef(null);

  useEffect(() => {
    let isPast = false;
    let wasBottom = false;

    const handleScroll = () => {
      const scrolled = window.scrollY >= 100;
      const nearBottom =
        window.scrollY >=
        document.body.scrollHeight - (window.innerHeight + 500);

      if (scrolled !== isPast) {
        isPast = scrolled;
        gsap.to(navLogo.current, {
          y: scrolled ? "-50%" : "0%",
          ease: "circ.inOut",
          duration: 0.5,
        });
      }

      setMenuPosition(window.scrollY >= window.innerHeight - 10);

      if (nearBottom !== wasBottom) {
        wasBottom = nearBottom;
        setIsBottom(nearBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav className="relative">
      <section className="fixed top-[1rem] left-0 w-full z-15 mt-[1rem] px-[1rem] bg-transparent">
        {/* MAIN NAVBAR */}
        <section>
          <section className="max-w-[1850px] mx-auto flex items-center justify-between">
            <section className="h-[2rem] overflow-hidden">
              <section
                ref={navLogo}
                className={`transition-opacity duration-300 ${isBottom ? "opacity-0 pointer-events-none" : "opacity-100"}`}
              >
                <Link
                  href="/"
                  className="text-light text-[1.5rem] font-[500] tracking-[.08em] compress-text-height"
                >
                  POPULOUS
                </Link>

                <Link href="/">
                  <Image
                    src="/img/10035.png"
                    alt="Populous logo"
                    width={30}
                    height={30}
                  />
                </Link>
              </section>
            </section>

            <button
              onClick={() => setIsActive(true)}
              className={`p-[1.5rem] cursor-pointer group flex flex-col items-center gap-[.3rem] hover:gap-[.4rem] transition-all ease-out duration-300 ${isBottom ? "opacity-0 pointer-events-none" : "opacity-100"}`}
            >
              <span
                ref={topBar}
                className={`w-[2rem] h-[2px] block transition-colors duration-300 ${menuPosition ? "bg-dark" : "bg-light"}`}
              ></span>
              <span
                className={`w-[2rem] h-[2px] block group-hover:w-[1rem] transition-all ease-out duration-200 ${menuPosition ? "bg-dark" : "bg-light"}`}
              ></span>
            </button>
          </section>
        </section>

        {/* OVERLAY FOR MENU */}
        <section
          ref={menuOverlay}
          className="fixed top-0 left-0 h-screen w-screen bg-black/50 opacity-0 z-10 pointer-events-none"
        ></section>

        {/* MENU */}
        <section
          ref={navMenu}
          className="fixed 3xl:top-[1.5rem] top-[0] 3xl:right-[1.5rem] right-0 [clip-path:polygon(0%_0%,100%_0%,100%_0%,0%_0%)] z-30 bg-light 2xl:rounded-[.5rem] rounded-0 3xl:h-[95%] h-[100%] 4xl:w-[50%] 3xl:w-[70%] w-[100%]"
        >
          <TfiClose
            onClick={() => setIsActive(false)}
            className="absolute top-[1rem] right-[1rem] text-[1.5rem] cursor-pointer"
          />

          <section className="flex flex-col items-start justify-between h-full p-[1rem]">
            <section className="flex xl:flex-row flex-col-reverse items-start justify-between w-full h-full xl:mt-0 mt-[4rem]">
              <nav className="xl:flex-1 flex flex-col gap-0 text-[3rem] leading-[3rem] h-full">
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

              <button className="xl:flex-1 flex items-center gap-[.5rem]">
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
      </section>

      {/* SUB NAVBAR */}
      <section className="absolute top-[3rem] right-[10rem] text-light text-[1rem] font-[500] 3xl:flex items-start gap-[17rem] z-12 4xl:opacity-100 opacity-0 4xl:pointer-events-auto pointer-events-none">
        {subNavLinks.map((subLink) => (
          <section key={subLink.id} className="flex flex-col">
            {subLink.links.map((link) => (
              <Link key={link.id} href={link.link} className="hover:underline">
                {link.title}
              </Link>
            ))}
          </section>
        ))}

        <button className="flex items-center gap-[.5rem]">
          <span className="hover:underline">Search</span>{" "}
          <IoIosSearch className="w-[1rem]" />
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
