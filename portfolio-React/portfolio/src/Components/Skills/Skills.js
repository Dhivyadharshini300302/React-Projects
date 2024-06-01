import React from 'react'
import './Skills.css'
import { faker } from '@faker-js/faker';

import UIDesign from './../Asserts/ui-design.png'
import webDesign from './../Asserts/website-design.png'
import AppDesign from './../Asserts/app-design.png'
const Skills = () => {
    const loremText = faker.lorem.paragraph(5);
    const loremTexts = faker.lorem.paragraph(1);
  return (
    <section id='skills'>
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>{loremText}</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='uidesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h1>UI/UX Design</h1>
                    <p>{loremTexts}</p>
                    </div>
            </div> 
            <div className='skillBar'>
                <img src={webDesign} alt='webdesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h1>Web Design</h1>
                    <p>{loremTexts}</p>
                    </div>
            </div> 
            <div className='skillBar'>
                <img src={AppDesign} alt='appdesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h1>App Design</h1>
                    <p>{loremTexts}</p>
                    </div>
            </div> 
            </div>  
    </section>

  )
}

export default Skills
