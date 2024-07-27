import React from "react";
import "../style/home.css";
const Home = ({ full_name, contacts, role, image }) => {
  return (
    <section className="home " id="home">
      <div className="content">
        <div className="content-row">

        
        <h2>
          Hi There,
          <br /> I'm <span>{full_name} </span>
        </h2>
        <p>
          I am into <span className="typing-text">{role[0]}</span>
        </p>
        <a href="#about" className="btn">
          <span className="me-1">About Me</span>
          <i className="fas fa-arrow-circle-down"></i>
        </a>

        {/* <div className="image">
            <img src={image}/>
          </div> 
        */}
        </div>
      </div>
    </section>
  );
};

export default Home;
