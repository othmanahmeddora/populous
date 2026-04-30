import Link from "next/link";

import { RiArrowRightLongLine } from "react-icons/ri";
import { RiCornerDownRightLine } from "react-icons/ri";
import { RiArrowLeftLongLine } from "react-icons/ri";
import { newsPerspective } from "@/data/news";
import Image from "next/image";

const NewsPerspective = () => {
  return (
    <section className="bg-light py-[5rem] w-full overflow-hidden">
      <section className="max-w-[1600px] mx-auto">
        <section className="flex items-center justify-between mb-[1rem]">
          <h2 className="font-[400] text-[1.75rem]">News & Perspectives</h2>

          <section className="flex items-center gap-[.5rem]">
            <button className="border border-dark p-[.5rem] rounded-[.2rem]">
              <RiArrowLeftLongLine />
            </button>
            <button className="border border-dark p-[.5rem] rounded-[.2rem]">
              <RiArrowRightLongLine />
            </button>
            <Link
              href="/"
              className="flex items-center gap-[1rem] px-[.5rem] py-[.45rem] text-[.8rem] font-[500] hover:bg-theme hover:text-white rounded-[.2rem]"
            >
              <RiCornerDownRightLine className="text-[1rem]" />
              View all
            </Link>
          </section>
        </section>

        <section className="flex items-center flex-nowrap w-full">
          {newsPerspective.map((item) => (
            <Link key={item.id} href="/" className="w-full">
              <span>{item.type}</span>

              <Image
                src={item.thumbNail}
                alt={item.title}
                width={500}
                height={500}
                className=""
              />

              <p>{item.date}</p>

              <h3>{item.title}</h3>
            </Link>
          ))}
        </section>
      </section>
    </section>
  );
};

export default NewsPerspective;
