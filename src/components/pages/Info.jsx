import React from 'react'
import './style.css'
import './media.css'
import { Link } from 'react-router-dom'

function Info() {
  return (
        <>
        <section>
          <div className="info__inner">
            <h2>Hi, I'm Aibek</h2>
            <span className='info__inner-txt'>
            With over four years of experience in web 
            development specializing in React, I possess
             deep knowledge and skills in creating
              modern, interactive, and high-performance
               user interfaces. My experience spans across projects
                of varying complexity, from small startups to 
            large-scale corporate applications.
            </span>
            <span className='info__inner-skills'>
            Skills:
            <ul>
              <li>Core Technologies: React, JavaScript (ES6+), HTML5, CSS3</li>
             <li>Development Tools: Webpack, Babel, ESLint, Prettier</li>
             <li>Version Control: Git, GitHub/GitLab/Bitbucket</li>
            </ul>
            </span>
            <div className='info__bottom'>
              <span>
            I've collaborated on diverse projects, applying my expertise to deliver 
            solutions that meet both technical and business objectives.           
             </span>
            <Link to='/contacts'><button className='get__started'>Get Started</button></Link>

            </div>
            
          </div>
        </section>

        </>
  )
}

export default Info
