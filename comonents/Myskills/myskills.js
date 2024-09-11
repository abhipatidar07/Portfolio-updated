import React from 'react';
import './myskills.css';
import html from '../../assets/htmlicon.png';
import css from '../../assets/cssicon.png';
import javascript from '../../assets/javascripticon.png';
import reacti from '../../assets/reacticon.png';
import cpp from '../../assets/cppicon.png';
import mysql from '../../assets/mysqlicon.png';
import mongodb from '../../assets/mongodbicon.png';
import python from '../../assets/pythonicon.png';
import java from '../../assets/javaicon.png';

const Myskills = () => {
  return (
    <section id='mySkills'>
      <span className='mySkillHeading'>My Skills</span>
      <div className='mySkillBoxes'>
        <div className='mySkillBox'>
            <img src={html} alt="" className='mySkillsImg' />
            <p className='mySkillName'>Html</p>
        </div>
        <div className='mySkillBox'>
            <img src={css} alt="" className='mySkillsImg' />
            <p className='mySkillName'>Css</p>
        </div>
        <div className='mySkillBox'>
            <img src={javascript} alt="" className='mySkillsImg' />
            <p className='mySkillName'>JavaScript</p>
        </div>
        <div className='mySkillBox'>
            <img src={reacti} alt="" className='mySkillsImg' />
            <p className='mySkillName'>React</p>
        </div>
        <div className='mySkillBox'>
            <img src={cpp} alt="" className='mySkillsImg' />
            <p className='mySkillName'>CPP</p>
        </div>
        <div className='mySkillBox'>
            <img src={mysql} alt="" className='mySkillsImg' />
            <p className='mySkillName'>MySql</p>
        </div>
        <div className='mySkillBox'>
            <img src={mongodb} alt="" className='mySkillsImg' />
            <p className='mySkillName'>MongoDb</p>
        </div>
        <div className='mySkillBox'>
            <img src={python} alt="" className='mySkillsImg' />
            <p className='mySkillName'>Python</p>
        </div>
        <div className='mySkillBox'>
            <img src={java} alt="" className='mySkillsImg' />
            <p className='mySkillName'>Java</p>
        </div>
      </div>
    </section>
  )
}

export default Myskills
