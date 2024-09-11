import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id="skills">
       <span className='skillTitle'>What I do</span>
       <span className='skillDesc'>I am a skilled and passionated web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS and JavaScript, ReactJS, also i have a good knowledge of Data Structure and Algorithm in C++.</span>
       <div className='skillBars'>
        <div className='skillBar'>
            <img src={UIDesign} alt='' className='skillBarImg'/>
            <div className='skillBarText'>
            <h2>UI/UX Design</h2>
            <p>This is a demo text</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={WebDesign} alt='' className='skillBarImg'/>
            <div className='skillBarText'>
            <h2>WebSite Design</h2>
            <p>This is demo content</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={AppDesign} alt='' className='skillBarImg'/>
            <div className='skillBarText'>
            <h2>App Design</h2>
            <p>This is demo content</p>
            </div>
        </div>
       </div>
    </section>
  )
}

export default Skills
