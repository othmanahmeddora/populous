import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 left-0 z-10 mt-[2rem]">
      <section className="max-w-[1800px] mx-auto flex items-center justify-between">
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

      <section className="absolute"></section>
    </nav>
  );
};

export default Navbar;
