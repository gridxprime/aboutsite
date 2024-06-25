import React from 'react'
import '../style.css'
import { Link } from 'react-router-dom'


function Contacts() {
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
        <div className="contacts">
          <span>
            Github: <a href="https://github.com/gridxprime/">gridxprime</a>
          </span>
          <span>
            Email: till_morning_comes@mail.ru
          </span>
          <span>Telegram: <a href="https://www.t.me/till_morning_comes">till_morning_comes</a>
          </span>
          <span>Youtube: <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Aibek Everon</a></span>
          </div>
      </div>

    </section>
  )
}

export default Contacts
