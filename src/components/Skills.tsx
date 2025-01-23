import React from "react";

const background = "/images/skills-background.jpg";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-cover bg-fixed"
      style={{
        backgroundImage: `url(${background})`,
        clipPath: "polygon(0 0, 20% 5%, 100% 0, 100% 100%, 80% 95%, 0 100%)",
        background: "#fafafa",
        height: "100%",
        fontSize: "1.4rem",
      }}
    >
      <div className="wrapper px-20 py-40 mx-auto max-w-screen-xl">
        <article className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="skills-box bg-opacity-90 p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-center text-text mb-6">
              Development Skills
            </h3>
            <div className="skills-list flex flex-wrap gap-4">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "SCSS",
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "PostgreSQL",
                "Next.js",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-first py-2 px-6 rounded-lg text-sm text-white font-semibold transition-transform transform duration-300 hover:bg-text hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="text-3xl font-bold text-center text-text mt-12 mb-6">
              Design Skills
            </h3>
            <div className="skills-list flex flex-wrap gap-4">
              <span className="bg-first py-2 px-6 rounded-lg text-sm text-white font-semibold transition-transform transform duration-300 hover:bg-text hover:scale-105">
                Figma
              </span>
            </div>
          </div>

          <div className="skills-img flex justify-center items-center">
            <img
              src="/images/hardskills.webp"
              alt="Skills illustration"
              className="shadow-2xl w-full h-auto"
            />
          </div>
        </article>
      </div>
    </section>
  );
};
