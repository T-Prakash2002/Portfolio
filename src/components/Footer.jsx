import React from "react";
import '../style/footer.css'

const Footer = ({first_name,contacts}) => {
  return (
    <section id="footer" className="footer border">
      <div className="box-container">
        <div className="box">
          <h3>{first_name}'s Portfolio</h3>
          <p>
            Thank you for visiting my personal portfolio website. Connect with
            me over socials. <br /> <br /> Keep Rising 🚀. Connect with me over
            live chat!
          </p>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <a href="#home">
            <i className="fas fa-chevron-circle-right"></i> Home
          </a>
          <a href="#about">
            <i className="fas fa-chevron-circle-right"></i> About
          </a>
          <a href="#skills">
            <i className="fas fa-chevron-circle-right"></i> Skills
          </a>
          <a href="#education">
            <i className="fas fa-chevron-circle-right"></i> Education
          </a>
          <a href="#projects">
            <i className="fas fa-chevron-circle-right"></i> Projects
          </a>
          <a href="#contacts">
            <i className="fas fa-chevron-circle-right"></i> Contacts
          </a>
        </div>

        <div className="box">
          <h3>Contact info</h3>
          <p>
            {" "}
            <i className="fas fa-phone"></i>
            +91 {contacts.phone}
          </p>
          <p>
            {" "}
            <i className="fas fa-envelope"></i>
            {contacts.email}
          </p>
          <p>
            {" "}
            <i className="fas fa-map-marked-alt"></i>{contacts.address.District},{contacts.address.State},{contacts.address.Country}
          </p>
          <div className="share">
            {contacts.socials.map((item, index) => (
              <a
                className={item.name}
                aria-label={item.name}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                <i className={item.icon_class}></i>
                
              </a>
            ))}
            {/* <a
              className="instagram"
              aria-label="Instagram"
              href="https://www.instagram.com/codewithtanveer/"
            >
              <i className="fab fa-instagram" target="_blank"></i>
            </a>
            <a
              className="linkedin"
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/tanveer-ahmad-934155227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="twitter"
              aria-label="twitter"
              href="https://twitter.com/ansaritanveer09?t=djOjp9Qx9fn4MNXnPF96Pw&s=09"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="github"
              aria-label="GitHub"
              href="https://github.com/CodeWithTanveer"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="dev"
              aria-label="Dev"
              href="https://www.youtube.com/channel/UCUHWQr2ACeR2lSMXABALxHw"
              target="_blank"
            >
              <i className="fa-brands fa-youtube"></i>
            </a> */}
          </div>
        </div>
      </div>

      <h1 className="credit">
        Designed & Developed <i className="fa fa-heart pulse"></i> by{" "}
        <a href="/"> {first_name}</a>
      </h1>
    </section>
  );
};

export default Footer;
