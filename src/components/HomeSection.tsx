import Link from "next/link";
import React from "react";
import profile from "../../public/images/profile.png";
import Image from "next/image";

const HomeSection = () => {
  return (
    <section
      className="relative bg-first overflow-hidden pt-[3.5rem]"
      id="home"
      style={{ height: "calc(100vh - 3rem)" }}
    >
      <div className="grid gap-20 ml-4">
        <h1 className="self-end text-dark text-[9rem] leading-[0.8]">
          <span className="text-shadow">Hello there!</span>
          <br />
          I'm Emanuela Markovic.
        </h1>
        <div className="flex space-x-4 mt-4">
          <Link
            href="/Resume_E_M.pdf"
            target="_blank"
            download={true}
            className="px-6 py-3 border border-dark text-dark text-center uppercase text-sm hover:border-text hover:text transition-all"
          >
            Resume
          </Link>
          <Link
            href="mailto:emanuela.markovic@hotmail.com"
            target={"_blank"}
            className="px-6 py-3 bg-text text-first text-center uppercase text-sm font-bold hover:bg-transparent hover:text-text hover:border-text border border-text transition-all"
          >
            Contact
          </Link>
        </div>

        <Image
          src={profile}
          alt="Emanuela Markovic"
          className="absolute right-0 bottom-0"
          width={495}
          height={400}
        />
      </div>
    </section>
  );
};

export default HomeSection;
