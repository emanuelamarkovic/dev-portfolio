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
      {" "}
      <div className="grid gap-20">
        <h1 className="self-end text-dark text-[9rem] leading-[0.8]">
          <span className="text-shadow">Hello there!</span>
          <br />
          I'm Emanuela Markovic.
        </h1>
        <div className="flex items-center justify-start mt-2">
          <Link
            href="/Resume_E_M.pdf"
            target="_blank"
            download={true}
            className="flex items-center bg-black text-white px-6 py-2.5 mr-6 rounded-lg text-lg font-semibold border-2 border-transparent transition hover:bg-gray-600 hover:border-gray-400"
          >
            Resume
          </Link>
          <Link
            href="mailto:emanuela.markovic@hotmail.com"
            target="_blank"
            className="flex items-center bg-first text-white px-6 py-2.5 rounded-lg text-lg font-semibold border-2 border-transparent transition hover:bg-gray-600 hover:border-gray-400"
          >
            Contact
          </Link>
        </div>
        <Image
          src={profile}
          alt="Emanuela Markovic"
          className="absolute right-0 bottom-0"
          width={295}
          height={200}
        />
      </div>
    </section>
  );
};

export default HomeSection;
