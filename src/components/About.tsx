import React from "react";

const background = "/images/background.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-cover bg-fixed"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="wrapper px-20 py-40 mx-auto max-w-screen-xl">
        <article className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-4  bg-white text-center mb-8">
            <h2 className="text-3xl font-bold text-first">About Me</h2>
            <p className="text-lg mt-4 max-w-3xl mx-auto text-first">
              Hi, I'm Emanuela. I specialize in full-stack web development. I
              love solving complex problems and building user-friendly
              applications with modern technologies like React, Node.js, and
              MongoDB.
            </p>
          </div>

          <div className="col-span-4 text-center">
            <h3 className="text-3xl font-bold text-first">
              Who's this person?
            </h3>
            <div className="h-1 w-40 bg-primary mx-auto mt-2" />
          </div>

          <div className="col-span-4 bg-white bg-opacity-90 p-8">
            <h4 className="text-2xl font-semibold text-center mb-4 text-first">
              My name is Emanuela.
            </h4>
            <p className="text-lg mb-4 text-first">
              I am a full-stack web developer with a passion for building
              beautiful and efficient applications. I have experience with HTML,
              CSS, JavaScript, React, Node.js, and MongoDB.
            </p>
            <p className="text-lg text-first">
              In my free time, I enjoy learning new technologies and improving
              my coding skills. I also love exploring new places, reading, and
              trying out different cuisines.
            </p>
          </div>

          <div className="col-span-4 text-center mt-8">
            <h3 className="text-3xl font-bold text-first">What does she do?</h3>
            <div className="h-1 w-40 bg-primary mx-auto mt-2" />
          </div>

          <div className="bg-white bg-opacity-90 p-8">
            <h4 className="text-2xl font-semibold text-center mb-4 text-first">
              I'm a web developer.
            </h4>
            <p className="text-lg mb-4 text-first">
              I build modern web applications using technologies like
              JavaScript, ReactJS, NodeJS, and MongoDB. I also work with HTML,
              CSS, Sass, and Tailwind CSS to create clean, responsive layouts.
            </p>
            <p className="text-lg text-first">
              My goal is to create intuitive and engaging user experiences while
              maintaining high code quality and performance.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
