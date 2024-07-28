import React from "react";
import "../style/education.css";

const Education = ({ education }) => {
  return (
    <section id="education">
      <h1 className="text-center heading">
        {/* <i className="fa-solid fa-user-graduate"></i> */}
        <i className="fas fa-graduation-cap"></i>
        EDUCATION
      </h1>
      <div className="heading-subtitle text-center">
        <p className="card-title fw-bold" style={{color:"#4e9ab8"}}>
          Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.
        </p>
      </div>
      <div className="education-container justify-content-center">
          <div className="row gap-4 justify-content-center">

            <div className="col-12" style={{width:"600px"}}>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">
                    <i className="fas fa-graduation-cap"></i>
                    {education.course.Course_name} in {education.course.institute}
                  </h4>
                  <p className="card-text">
                    {education.course.Duration}
                  </p>
                  <p className="card-text">
                    Feb-2024 to May-2024
                  </p>
                  
                </div>

              </div>
            </div>
            <div className="col-12" style={{width:"600px"}}>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">
                    <i className="fas fa-graduation-cap"></i>
                    Bachelor of Engineering in Computer Science
                  </h4>
                  <p className="card-text">
                    {education.college.Institute} | 2019-2023
                  </p>
                  
                  <p className="card-text">
                    CGPA | {education.college.percentage}%
                  </p>
                  
                </div>
              </div>
            </div>

            <div className="col-12" style={{width:"600px"}}>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">
                    <i className="fas fa-graduation-cap"></i>
                    12th STD
                  </h4>
                  <p className="card-text">
                    {education.HSC.school} | {education.HSC.year}
                  </p>
                  
                  <p className="card-text">
                    Percentage | {education.HSC.percentage}%
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12" style={{width:"600px"}}>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">
                    <i className="fas fa-graduation-cap"></i>
                    10th STD
                  </h4>
                  <p className="card-text">
                    {education.SSLC.school} | {education.SSLC.year}
                  </p>
                  
                  <p className="card-text">
                    Percentage | {education.SSLC.percentage}%
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    )
  }
  
  export default Education;

