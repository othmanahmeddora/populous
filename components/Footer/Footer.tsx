import { footerLinks } from "@/data/footerLinks";
import Link from "next/link";

import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 bg-theme h-screen z-0">
      <section className="w-full max-w-[1600px] mx-auto py-[2rem] px-[1rem] flex flex-col justify-between text-light h-full">
        <Link
          href="/"
          className="text-light text-[1.5rem] font-[500] tracking-[.08em] compress-text-height"
        >
          POPULOUS
        </Link>

        <section className="lg:flex grid grid-cols-2 items-start justify-between gap-[2rem]">
          {footerLinks.map((footerLink) => (
            <section key={footerLink.id} className="flex-1">
              <h3 className="text-[.7rem] text-light-gray font-[500]">
                {footerLink.title}
              </h3>

              <section className="flex flex-col mt-[2rem]">
                {footerLink.links.map((link) => (
                  <Link
                    key={link.id}
                    href={link.link}
                    className="hover:underline"
                  >
                    {link.title}
                  </Link>
                ))}
              </section>
            </section>
          ))}
        </section>

        <section className="flex lg:flex-row flex-col items-start justify-between">
          <section className="flex-1">
            <Link href="/" className="hover:underline">
              Privacy Policy
            </Link>

            <p className="lg:flex hidden items-center gap-[.2rem] mt-[1rem]">
              Copyright <BiCopyright /> 2026 Populous
            </p>
          </section>

          <Link href="/" className="flex-1 hover:underline">
            Terms of Use
          </Link>

          <Link href="/" className="flex-1 hover:underline">
            Transparency Statement
          </Link>

          <Link href="/" className="flex-1 hover:underline">
            Manage Cookies
          </Link>

          <p className="flex lg:hidden items-center gap-[.2rem] mt-[1rem]">
            Copyright <BiCopyright /> 2026 Populous
          </p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
