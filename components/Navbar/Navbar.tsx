import Link from "next/link";

import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 left-0 z-10 mt-[1rem]">
      <section className="max-w-[1850px] mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-light text-[1.5rem] font-[500] tracking-[.08em] compress-text-height"
        >
          POPULOUS
        </Link>

        <button className="p-[1.5rem] cursor-pointer group flex flex-col items-center gap-[.3rem] hover:gap-[.4rem] transition-all ease-out duration-200">
          <span className="w-[2rem] h-[2px] bg-light block"></span>
          <span className="w-[2rem] h-[2px] bg-light block group-hover:w-[1rem] transition-all ease-out duration-200"></span>
        </button>
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

        <section className="flex items-center gap-[.5rem]">
          <span className="hover:underline">Search</span>{" "}
          <IoIosSearch className="w-[1rem]" />
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
