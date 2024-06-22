import React from 'react'
import './../style.css'
import './style.css'
import { Link } from 'react-router-dom'
import Image1 from '../../img/projects/1.webp'
import Image2 from '../../img/projects/2.webp'
import Image3 from '../../img/projects/3.webp'
import Image4 from '../../img/projects/4.webp'
import Image5 from '../../img/projects/5.webp'
import Image6 from '../../img/projects/6.webp'

function Projects() {
  return (
<section className='home'>
      <div className="home__top">
          <span>
            Aibek Everon
          </span>
          <div className="window__actions">
            <div className="hide outline">
              <span>–</span>
            </div>
            <div className="full__window outline">❒</div>
            <div className="close outline">X</div>
          </div>
      </div>
      <nav className='navbar'>
        <ul>
          <Link style={{width: '100%', textDecoration: 'none', color: '#fff'}} to ='/'> <li>Info</li></Link>
          <Link style={{width: '100%', textDecoration: 'none', color: '#fff'}} to ='/projects'> <li>Projects</li></Link> 
          <Link style={{width: '100%' , textDecoration: 'none', color: '#fff'}} to ='/about'><li>About</li></Link>
          <Link style={{width: '100%' , textDecoration: 'none', color: '#fff'}} to ='/contacts'><li>Contacts</li></Link>
        </ul>
      </nav>
      <div className="output">
          <div className="images">
            <img src={Image1} alt="" />
            <img src={Image2} alt="" />
            <img src={Image3} alt="" />
            <img src={Image4} alt="" />
            <img src={Image5} alt="" />
            <img src={Image6} alt="" />
          </div>
      </div>

    </section>
  )
}

export default Projects
