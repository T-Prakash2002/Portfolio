import "./App.css";

import data from './data'
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from './components/Projects'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'


function App() {


  const {
    id,
    first_name,
    last_name,
    full_name,
    age,
    contacts,
    image,
    about,
    role,
    education,
    projects,
    skills,
    resume,
  } = data;

  
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-transparent p-3 ">
        <div className="container-fluid">
          <a className="logo" href="#">
            <i className="fa-solid fa-user"></i>
          </a>
          <button
            className="navbar-toggler toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i>@</i>
            </span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-sm-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#home">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#education">
                  Education
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      {/* HOME */}

      <Home 
      full_name={full_name} 
      contacts={contacts} 
      image={image}
      role={role}
       />


      {/* ABOUT */}
      <About
        full_name={full_name}
        image={image}
        role={role}
        age={age}
        year={education?.year}  
        resume={resume}
        contacts={contacts}
      />


      {/* SKILLS */}
      <Skills skills={skills}/>


      {/* EDUCATION */}
      <Education 
      education={education}
      />

      {/* Projects Section */}
      <Projects projects={projects} />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer first_name={first_name} contacts={contacts} />
    </>
  );
}

export default App;
