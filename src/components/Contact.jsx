import React from "react";
import "../style/contact.css";

const Contact = ({ contacts, full_name }) => {
  return (
    <section id="contact">
      <h1 className="text-center heading">
        <i className="fa-solid fa-id-badge"></i> Contact Me
      </h1>
      <div className="container-fluid contact-container">
        <div className="row">
          <div className="co-12 col-md-6">
            <div className="text">Get in Touch</div>
            <p className="letsThing">
              Let me build the website you need & <br /> Let's build something
              great!
            </p>
              <div className="info">
                <div className="head">
                  <i className="fas fa-user"></i>
                  Name
                </div>
                <span className="sub-title">{full_name}</span>
              </div>

              <div className="info">
                <div className="head">
                  <i className="fas fa-map-marker-alt"></i>Address
                </div>
                <div className="sub-title">
                  {contacts.address.Street},{contacts.address.Village},
                  {contacts.address.Taluk},<br />
                  {contacts.address.District},{contacts.address.State},
                  {contacts.address.Country},{contacts.address.Pincode}
                </div>
              </div>
              <div className="info">
                <div className="head">
                  <i className="fa fa-phone"></i>Phone
                </div>
                <div className="sub-title">+91 - {contacts.phone}</div>
              </div>
          </div>
          <div className="co-12 col-md-6">
            <div className="icons">
              <div className="text">
                Mail me for any other further queries
              </div>

              {/* GMAIL */}
              <div className="row">
                
                <div className="info-right">
                  <div className="head">
                    <a href={`mailto:${contacts.email}`} target="_blank">
                      <i className={contacts.socials[2].icon_class}id="emailIcon">
                        <span className="tooltiptext">
                          Email
                        </span>
                      </i>
                    </a>
                  </div>
                  <a className="icon-link" href={`mailto:${contacts.email}`} target="_blank">
                    {contacts.email}
                  </a>
                </div>
              </div>

              {/* LINKEDIN */}
              <div className="row">
                
                <div className="info-right">
                  <div className="head">
                    <a
                      href={`https://www.linkedin.com/in/${contacts.socials[0].link}`}
                      target="_blank"
                    >
                      <i className={contacts.socials[0].icon_class}id="linkedinIcon">
                        <span className="tooltiptext">
                          LinkedIn
                        </span>
                      </i>
                    </a>
                  </div>
                  <a
                    href={`https://www.linkedin.com/in/${contacts.socials[0].link}`}
                    target="_blank"
                    className="icon-link"
                  >
                    {contacts.socials[0].link}
                  </a>
                </div>
              </div>

              <div className="text">See all other my works on Github</div>
              <div className="row">
                
                <div className="info-right">
                  <div className="head">
                    <a
                      href={`https://github.com/${contacts.socials[1].link}`}
                      target="_blank"
                    >
                      <i className={contacts.socials[1].icon_class}id="githubIcon">
                        <span className="tooltiptext">
                          Github
                        </span>
                      </i>
                    </a>
                  </div>
                  <a
                    href={`https://github.com/${contacts.socials[1].link}`}
                    target="_blank"
                    className="icon-link"
                  >
                    {contacts.socials[1].link}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
