import React from "react";
import "../style/about.css";

const About = ({ full_name, image, role, resume, contacts, year, age }) => {
  return (
    <>
      <section id="about" className="about">
        <h2 className="heading col-12">
          <i className="fas fa-user-alt"></i> About <span>Me</span>
        </h2>

        <div className="row">

          <div className="image col-12 col-sm-12 col-md-5">
            <img className="w-50 " src={image} />
          </div>

          <div className="content col-12 col-sm-12 col-md-7">
            <h3 className="col-12 col-md-12">I'm {full_name}</h3>
            <span className="tag ">{role[0]}</span>

            <p className="col-12 col-md-12 p-2">
              I'm {full_name},pursed my Bachelor's degree in Computer Science in{" "}
              {year}.
              <br />
              I have a keen interest in Computer Science and programming.
              <br />
              <br />
              I have skilled at MERN Full Stack Web Applications,I have the
              knack of building applications with Front End and Back End
              operations,I am very good at HTML5, CSS, Javascript, ReactJs,
              NodeJs, ExpressJs, MongoDB.
              <br />
              <br />I always like to learn and upgrade myself at every
              opportunity and contribute maximum towards teamwork and goal
              setting for achieving targets.
            </p>

            <div className="btn resumebtn">
              <a href={resume} target="_blank" className="btn btn-link">
                <span>Resume</span>
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>


        </div>
      </section>
    </>
  );
};

export default About;
