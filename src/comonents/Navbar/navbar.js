import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png';
import ContactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png'
import {Link} from 'react-scroll';
const Navbar = () => {
  const[showMenu,setshowMenu]=useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo' />
        <div className='desktopMenu'>
         <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500}className='desktopMenuListItem'>Home</Link>
         <Link 
         activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}className='desktopMenuListItem'>About</Link>
         <Link
         activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}
          className='desktopMenuListItem'>Portfolio</Link>
         <Link 
         activeClass='active' to='mySkills' spy={true} smooth={true} offset={-50} duration={500}className='desktopMenuListItem'>MySkills</Link>
        </div>
        <button className='desktopMenuBtn' onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={ContactImg} alt='' className='desktopMenuImg' />Contact Me
        </button>    

        <img src={menu} alt='Menu' className='mobMenu' onClick={()=>setshowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
         <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500}className='listItem' onClick={()=>setshowMenu(false)}>Home</Link>
         <Link 
         activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}className='listItem' onClick={()=>setshowMenu(false)}>About</Link>
         <Link
         activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}
          className='listItem' onClick={()=>setshowMenu(false)}>Portfolio</Link>
         <Link 
         activeClass='active' to='mySkills' spy={true} smooth={true} offset={-50} duration={500}className='listItem' onClick={()=>setshowMenu(false)}>MySkills</Link>
         <Link 
         activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}className='listItem' onClick={()=>setshowMenu(false)}>Contact</Link>
        </div>
      
    </nav>
  )
}

export default Navbar
