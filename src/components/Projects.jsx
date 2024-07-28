import React from "react";
import "../style/projects.css";

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="projects">
      <h1 className="heading">
        <i className="fas fa-code"></i>
        PROJECTS
      </h1>

      <div className="credentials">
        <p className="text-center">
          <b>*For all Credentials -test@gmail.com & password - test123</b>
        </p>
      </div>

      <div className="project-container row gap-4 justify-content-center">
        {projects.map((project, index) => {
          return (
            <div className="card col-12 col-md-6 col-lg-4" key={index}>
              <div className="card-box">
                <img src={project.image} alt={project.name} />
                <div className="text">{project.name}</div>
                <p>
                  {" "}
                  Technologies: <b className="techUsed">ReactJs,Nodejs,MongoDB </b>
                </p>
                <br />
                <div className="btn-container">
                  <a
                    className="btn btn-link"
                    href={project.live_link}
                    target="_blank"
                  >
                    Live
                  </a>
                  <a
                    className="btn btn-link"
                    href={project.front_end}
                    target="_blank"
                  >
                    Frontend
                  </a>
                  <a
                    className="btn btn-link"
                    href={project.back_end}
                    target="_blank"
                  >
                    Backend
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
