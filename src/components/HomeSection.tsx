import Link from "next/link";
import React from "react";
import profile from "../../public/images/profile.png";
import Image from "next/image";
import useTypingEffect from "../hooks/useTypingEffect";

const texts = [
  "Frontend Developer",
  "Backend Developer",
  "Full-Stack Developer",
];

const HomeSection = () => {
  const currentText = useTypingEffect(texts);

  return (
    <section
      className="relative bg-first overflow-hidden h-screen flex flex-col justify-center items-start"
      id="home"
    >
      <div className="ml-4 relative z-10 p-8 mt-[60vh] md:mt-[15vh]">
        <h1 className="text-first md:text-dark text-[3rem] md:text-[6rem] lg:text-[9rem] leading-[1] md:leading-[0.8]">
          <span className="text-shadow">Hello there!</span>
          <br />
          I'm Emanuela Markovic.
        </h1>
        <div className="text-container h-4 mt-4 mb-4 text-first md:text-dark text-[1.5rem] md:text-[2rem] lg:text-[3rem] flex items-center space-x-2">
          <span id="dynamic-text" className="highlight text-text">
            {currentText}
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-8">
          <Link
            href="/Resume_E_M.pdf"
            target="_blank"
            download={true}
            className="px-6 py-3 border border-first md:border-text text-first md:text-dark text-center uppercase text-sm hover:border-text hover:text transition-all"
          >
            Resume
          </Link>
          <Link
            href="mailto:emanuela.markovic@hotmail.com"
            target={"_blank"}
            className="px-6 py-3 bg-text text-white md:bg-text md:text-first text-center uppercase text-sm font-bold hover:bg-transparent hover:text-text hover:border-text border md:border-text transition-all"
          >
            Contact
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 w-full h-full">
        <Image
          src={profile}
          alt="Emanuela Markovic"
          className="object-cover w-full h-full md:hidden"
          layout="fill"
          priority={true}
        />
        <Image
          src={profile}
          alt="Emanuela Markovic"
          className="hidden md:block absolute right-0 bottom-0 w-[200px] md:w-[400px] lg:w-[495px] h-auto"
          width={495}
          height={400}
        />
      </div>
    </section>
  );
};

export default HomeSection;
