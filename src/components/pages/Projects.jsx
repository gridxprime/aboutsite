import React from 'react'
import './../style.css'
import './style.css'
import { Link } from 'react-router-dom'

import  UseEmblaCarousel  from 'embla-carousel-react'

import Image1 from '../../img/projects/1.webp'
import Image2 from '../../img/projects/2.webp'
import Image3 from '../../img/projects/3.webp'
import Image4 from '../../img/projects/4.webp'
import Image5 from '../../img/projects/5.webp'
import Image6 from '../../img/projects/6.webp'
import Image7 from '../../img/projects/7.webp'
import Image8 from '../../img/projects/8.webp'
import Image9 from '../../img/projects/9.webp'
import Image10 from '../../img/projects/10.webp'
import Image11 from '../../img/projects/11.webp'
import Image12 from '../../img/projects/12.webp'


function Projects() {

const [emblaRef] = UseEmblaCarousel()

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
            <div className="close outline"> <Link style={{width: '100%' , textDecoration: 'none', color: '#fff'}} to='/open__terminal'>X</Link> </div>
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
      <span className='output__span'>
           As a React developer with 4 years of experience, I have successfully completed numerous projects, including:
           </span>
        <div className="embla" ref={emblaRef}>
           <div className="embla__container">
             <div className="embla__slide"><img src={Image1} alt="" /></div> 
             <div className="embla__slide"><img src={Image2} alt="" /></div> 
             <div className="embla__slide"><img src={Image5} alt="" /></div> 
             <div className="embla__slide"><img src={Image3} alt="" /></div> 
             <div className="embla__slide"><img src={Image4} alt="" /></div> 
             <div className="embla__slide"><img src={Image6} alt="" /></div> 
             <div className="embla__slide"><img src={Image7} alt="" /></div> 
             <div className="embla__slide"><img src={Image8} alt="" /></div> 
             <div className="embla__slide"><img src={Image9} alt="" /></div> 
             <div className="embla__slide"><img src={Image10} alt="" /></div> 
             <div className="embla__slide"><img src={Image11} alt="" /></div> 
             <div className="embla__slide"><img src={Image12} alt="" /></div> 

           </div>
           <span>Swipe ↔ </span>

           </div>
     
          
      </div>

    </section>
  )
}

export default Projects
