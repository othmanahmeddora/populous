import Link from "next/link";

import Navbar from "@/components/Navbar/Navbar";

import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import CTA from "@/components/CTA/CTA";

const page = () => {
  return (
    <section className="bg-light">
      <Navbar navColor="dark" />

      <section className="max-w-[1600px] mx-auto">
        <section className="flex flex-col">
          <section className="flex items-end justify-between pt-[15rem] pb-[5rem]">
            <h1 className="flex-2 relative text-[8.75rem] tracking-tighter">
              Projects{" "}
              <span className="absolute text-[1rem] top-[5rem] right-[20rem] font-medium tracking-normal">
                (288)
              </span>
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

        <section className="flex flex-col py-[5rem]">
          <section className="flex items-center justify-between pl-[.9rem]">
            <p className="flex-2">dummy title</p>
            <p className="flex-1">dummy location</p>
            <p className="flex-1">dummy date</p>
          </section>
        </section>
      </section>

      <CTA />
    </section>
  );
};

export default page;
