import React from 'react'
import './intro.css';
import bg from '../../assets/photu.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='intorText'>I'm <span className='introName'>Abhishek</span> <br />Website Designer</span>
        <p className='introPara'> I am a skilled web designer with experience in creating visually appealing and user friendly websites.</p>
        <Link><button className='btn'><img src={btnImg} alt='' className='btnImg' />Hire me</button></Link>
      </div>
      <img src={bg} alt='portfolio' className='bg'/>
    </section>
  )
}

export default Intro
