import { footerLinks } from "@/data/footerLinks";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-theme h-screen">
      <section className="max-w-[1600px] flex flex-col items-start justify-between">
        <h2>Populous</h2>

        <section>
          {footerLinks.map((footerLink) => (
            <section key={footerLink.id}>
              <h3 className="">{footerLink.title}</h3>

              <section>
                {footerLink.links.map((link) => (
                  <Link key={link.id} href={link.link}>
                    {link.title}
                  </Link>
                ))}
              </section>
            </section>
          ))}
        </section>

        <section></section>
      </section>
    </footer>
  );
};

export default Footer;
