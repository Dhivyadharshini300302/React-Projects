import React, { useState } from 'react'
import './Nav.css'

import logo from './../Asserts/logo.png'
import {Link} from 'react-scroll'
import contact from './../Asserts/contact.png'
import menu from './../Asserts/menu.png'

const Nav = () => {
  const [showMenu,setShowMenu] = useState(false)
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'></img>
        <div className='desktopMenu'>
        
        <Link  activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
        <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem' >Portfolio</Link>
        <Link  activeClass='active' to='myclients' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>clients</Link>
       
        </div>
        <button className='desktopMenubtn' onClick={()=>{
          document.getElementById('contacts').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={contact} alt='' className='desktopMenuImg'/>Contack Me
        </button>
        <img src={menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}></img>
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
        
        <Link  activeClass='active' to='intro' spy={true} smooth={true}  boffset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
        <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
        <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link  activeClass='active' to='myclients' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>clients</Link>
        <Link  activeClass='active' to='contacts' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contacts</Link>
       
        </div>
    </nav>
  )
}

export default Nav
