import { disciplines } from "@/data/disciplines";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa6";

const Discipline = () => {
  return (
    <section className="bg-light xl:py-[10rem] py-[5rem] px-[1rem]">
      <section className="max-w-[1600px] mx-auto flex xl:flex-row flex-col xl:gap-0 gap-[2rem] items-start justify-between">
        <h2 className="flex-1 text-[2.25rem]">Disciplines</h2>

        <section className="flex-1 relative flex flex-col">
          {disciplines.map((discipline) => (
            <Link
              key={discipline.id}
              href={discipline.link}
              className="relative flex items-start justify-between md:gap-[1rem] border-t-[1px] border-light-gray xl:text-[2.25rem] text-[1.55rem] leading-[2.5rem] mb-[1rem] group"
            >
              <p className="group-hover:text-theme transition-all ease-out duration-200">
                {discipline.title}
              </p>

              <div className="xl:absolute top-[60%] xl:translate-y-[-50%] left-[-4%] text-[1.5rem] overflow-hidden w-fit">
                <FaArrowRight className="xl:translate-x-[-100%] group-hover:translate-x-[0] group-hover:text-theme transition-all ease-out duration-200" />
              </div>
            </Link>
          ))}
        </section>
      </section>
    </section>
  );
};

export default Discipline;
