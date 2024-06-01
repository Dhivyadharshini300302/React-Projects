import React from 'react'
import './Intro.css'
import bg from './../Asserts/image.png'
import btn from './../Asserts/hireme.png'
import {Link} from 'react-scroll'

const Intro = () => {
  return (
    <div>
      <section id='intro'>
        <div className='introContent'>
          <span className='hello'>Hello,</span>
          <span className='introText'>I'm <span className='introName'>SMITH</span><br/> Web Designer</span>
          <p className='introPara'>I am a creative person who combines artistic talent with technical <br/>expertise to craft visually appealing and user-friendly websites</p>
          <Link><button className='btn'><img src={btn} alt='Hire Me'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg'/>
      </section>
    </div>
  )
}

export default Intro
