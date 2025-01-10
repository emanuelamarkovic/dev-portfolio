import React from "react";

type ProjectProps = {
  title: string;
  img: string;
  tech: string;
  link: string;
  repo: string;
  children: React.ReactNode;
};

const Project: React.FC<ProjectProps> = ({
  title,
  img,
  tech,
  link,
  repo,
  children,
}) => {
  const techIcons: { [key: string]: string } = {
    sass: "fab fa-sass",
    css: "fab fa-css3-alt",
    js: "fab fa-js-square",
    react: "fab fa-react",
    vue: "fab fa-vuejs",
    d3: "far fa-chart-bar",
    node: "fab fa-node",
  };

  return (
    <div className="project mb-8 p-8 rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-2 gap-8">
      <a
        className="project-link block mx-auto my-0 text-foreground overflow-hidden text-center rounded-full border border-gray-100 shadow-lg transition-all duration-300 hover:shadow-[0_50px_15px_-30px_rgba(37,41,52,.5)] hover:scale-105"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="project-image w-48 h-48 rounded-full transform scale-[1.2] filter grayscale transition-all duration-300 hover:scale-[1.05] hover:grayscale-0 object-cover"
          src={img}
          alt={`Screenshot of ${title}`}
        />
      </a>

      <div className="project-details flex flex-col justify-center">
        <div className="project-tile text-xl font-bold text-text mb-2">
          <p className="icons text-foreground mb-2">
            {tech.split(" ").map((t) => (
              <i className={techIcons[t]} key={t} />
            ))}
          </p>
          {title}
        </div>
        <div className="project-description text-first mb-4">{children}</div>

        <div className="buttons flex justify-between mt-4">
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 p-2 text-foreground border-b-2 border-text hover:bg-text hover:text-white text-center"
          >
            View source <i className="fas fa-external-link-alt ml-2" />
          </a>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 p-2 text-foreground border-b-2 border-text hover:bg-text hover:text-white text-center"
          >
            Try it Live <i className="fas fa-external-link-alt ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
