import React from "react";

interface SocialLinksProps {}

const SocialLinks: React.FC<SocialLinksProps> = (props) => {
  return (
    <div className="social text-white text-lg">
      <a
        href="https://www.linkedin.com/in/emanuela-markovic-5518bb2b7/"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to Linkedin profile"
      >
        {" "}
        <i className="fab fa-linkedin" />
      </a>
      <a
        id="profile-link"
        href="https://github.com/emanuelamarkovic"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to GitHub Profile"
      >
        {" "}
        <i className="fab fa-github" />
      </a>
    </div>
  );
};

export default SocialLinks;
