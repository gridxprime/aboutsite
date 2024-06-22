import React from 'react'
import '../style.css'
import { Link } from 'react-router-dom'

function About() {
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
      <p>> Name: Aibek Everon</p>
            <p>> Title: React Developer</p>
            <p>> Skills: React, JavaScript, HTML, CSS, Redux, Node.js</p>
            <p>> Experience: 4 years</p>
            <p>> Projects: 10+ major projects, including e-commerce platforms and social media applications</p>
            <p>> Education: BSc in Computer Science</p>
            <p>> Contact: aibek.everon@example.com</p>
            <p>> Opening file: index.html</p>
            <p>> Opening file: app.jsx</p>
            <p>> Opening file: style.css</p>
            <p>> Opening file: components/Header.jsx</p>
            <p>> Opening file: components/Footer.jsx</p>
            <p>> Opening file: redux/store.js</p>
            <p>> Opening file: redux/actions.js</p>
            <p>> Opening file: redux/reducers.js</p>
      </div>

    </section>
  )
}

export default About
