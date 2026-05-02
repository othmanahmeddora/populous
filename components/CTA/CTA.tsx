import Link from "next/link";

import { RiCornerDownRightLine } from "react-icons/ri";

const CTA = () => {
  return (
    <section className="bg-light py-[10rem] px-[1rem]">
      <section className="flex flex-col items-center justify-between xl:gap-[5rem] gap-[2rem]">
        <section className="text-center xl:text-[5rem] text-[2rem] tracking-tighter xl:leading-[5.5rem] leading-[2.5rem]">
          <p>Have a question?</p>

          <p>Want to work with us?</p>
        </section>

        <Link
          href="/"
          className="w-fit flex items-end gap-[.5rem] px-[.5rem] py-[.45rem] text-[.8rem] font-[500] bg-dark text-light hover:bg-theme hover:text-white rounded-[.3rem]"
        >
          <RiCornerDownRightLine className="text-[1rem]" />
          Contact
        </Link>
      </section>
    </section>
  );
};

export default CTA;
