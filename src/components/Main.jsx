import React from 'react'
import './style.css'
import './media.css'
import { Link } from 'react-router-dom'
import Info from './pages/Info'


function Main() {
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
          <Info>

          </Info>
      </div>

    </section>
  )
}

export default Main
