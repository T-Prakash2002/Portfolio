import React from 'react'
import '../style/skills.css'

const Skills = ({skills}) => {

  return (
    <section id='skills'>
      
        <h2 className='heading'>
          <i className="fas fa-code"></i>
          Skills
        </h2>

        <div className='skill-container container'>

          <div className="row">
          
          {
            skills.map((item,index)=>{
              return(
                  <div className='bar d-flex justify-content-center col-md-3 col-sm-4 col-xs-6' key={index}>
                    <div className='info justify-content-center'>
                        <img src={item.icon_images} alt="skill" className='img-fluid g-col-12'/>

                      <span className='text-center'>{item.name}</span>
                    </div>
                  </div>
              )
            })
          }
          </div>
        </div>

    </section>
  )
}

export default Skills