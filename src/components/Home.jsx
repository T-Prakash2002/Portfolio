import React from "react";
import "../style/home.css";
const Home = ({ full_name, contacts, role, image }) => {
  return (
    <section className="home container-fluied" id="home">
      <div className="hero">
        <div className="left ">
          <div className="image_hero">
            <img src={image} alt="Profile" />
          </div>
        </div>
        <div className="right ">
          <h6>
          Hi There,
          <br /> I'm <span className="name">{full_name} </span>
        </h6>
        <p>
          I am into <span className="typing-text">{role[0]}</span>
        </p>

          <div>
            <a href="#about" className="btn">
              <span className="me-1">About Me</span>
              <i className="fas fa-arrow-circle-down"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
