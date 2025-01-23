import React from "react";
import Project from "./Project";

const ProjectSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen pt-40 relative z-10 bg-gray-100 clip-contact"
    >
      <div className="projects-container max-w-7xl mx-auto px-10 py-16">
        <div className="heading text-center">
          <h3 className="title text-3xl font-semibold mb-4 text-text">
            My Works
          </h3>
          <div className="separator w-36 h-1 bg-text mx-auto mb-8"></div>
          <p className="subtitle text-lg mx-auto text-first text-justify w-3/4 mb-6">
            Here's a list of <u>most</u> of the projects I've been working on
            lately. All of these projects were created during my DCI training at
            <a
              href="https://digitalcareerinstitute.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:underline"
            >
              DCI
            </a>
            , where I coded non-stop for almost 14 months until I had completed
            all the projects required for my Full-Stack Developer certification.
          </p>
        </div>

        <div className="projects-wrapper mt-12">
          {/* First Project */}
          <Project
            title="Codeknacker"
            img="/images/codeknack.png"
            tech="js react vite"
            link="https://github.com/emanuelamarkovic/"
            repo="https://emanuelamarkovic.github.io/codeknacker/"
          >
            <small>
              Built with React, Vite, MongoDB, and various libraries such as
              React Router and React Spinners.
            </small>
            <p>
              This game developed with JavaScript, React for dynamic user
              interfaces, and Vite for lightning-fast development.
            </p>
          </Project>

          {/* Second Project */}
          <Project
            title="Simple-Quiz-Game"
            img="/images/simpleQuizGame.png"
            tech="js html css"
            link="https://emanuelamarkovic.github.io/Simple-Quiz-Game/index.html"
            repo="https://github.com/emanuelamarkovic/Simple-Quiz-Game"
          >
            <small>Built with JavaScript, HTML, and CSS.</small>

            <p>
              This is a small collection of daily-tasks built with JavaScript,
              HTML, and CSS.
            </p>
          </Project>

          {/* Third Project */}
          <Project
            title="Daily-Tasks-frontend"
            img="/images/dailyTasks.png"
            tech="js react css"
            link="https://emanuelamarkovic.github.io/"
            repo="https://github.com/emanuelamarkovic/daily-tasks-frontend"
          >
            <small>
              Built using React Native, Expo, and various libraries such as
              react-navigation, axios, and moment.
            </small>
            <p>This is a small collection of JavaScript games.</p>
          </Project>

          {/* Fourth Project */}
          <Project
            title="Daily-Tasks-backend"
            img="/images/dailyTasksBackend.png"
            tech="node express mongodb"
            link="https://emanuelamarkovic.github.io/"
            repo="https://github.com/emanuelamarkovic/daily-tasks-backend"
          >
            <small>
              Built using Node.js, Express, MongoDB, and various libraries such
              as Mongoose, bcrypt, and Cloudinary.
            </small>
            <p>
              This is a small collection of JavaScript games with backend
              integration.
            </p>
          </Project>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
