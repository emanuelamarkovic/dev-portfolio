import React from "react";
import Project from "./Project";

const ProjectSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-background/70 to-foreground/70 pt-40 relative z-10"
    >
      <div className="projects-container max-w-7xl mx-auto px-10 py-16">
        <div className="heading text-center">
          <h3 className="title text-3xl font-semibold mb-4 text-text">
            My Works
          </h3>
          <div className="separator w-36 h-1 bg-pink-600 mx-auto mb-8"></div>
          <p className="subtitle text-lg mx-auto text-first text-justify w-3/4 mb-6">
            Here's a list of <u>most</u> of the projects I've been working on
            lately. All of these projects were created during my DCI training at
            <a
              href="https://digitalcareerinstitute.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:underline"
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
            repo="https://github.com/emanuelamarkovic/codeknacker"
          >
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
            <p>
              This is a small collection of daily-tasks built with JavaScript,
              HTML, and CSS.
            </p>
          </Project>

          {/* Third Project */}
          <Project
            title="Daily-Tasks-frontend"
            img="/images/dailyTasks.png"
            tech="js react-native css"
            link="https://emanuelamarkovic.github.io/"
            repo="https://github.com/emanuelamarkovic/daily-tasks-frontend"
          >
            <p>This is a small collection of JavaScript games.</p>
          </Project>

          {/* Fourth Project */}
          <Project
            title="Daily-Tasks-backend"
            img="/images/dailyTasksBackend.png"
            tech="node mongodb express"
            link="https://emanuelamarkovic.github.io/"
            repo="https://github.com/emanuelamarkovic/daily-tasks-backend"
          >
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
