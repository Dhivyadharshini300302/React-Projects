import React from 'react'
import './Works.css'
import { faker } from '@faker-js/faker';

import portfolio1 from './../Asserts/portfolio-1.png'
import portfolio2 from './../Asserts/portfolio-2.png'
import portfolio3 from './../Asserts/portfolio-3.png'
import portfolio4 from './../Asserts/portfolio-4.png'
import portfolio5 from './../Asserts/portfolio-5.png'
import portfolio6 from './../Asserts/portfolio-6.png'

const Works = () => {
    const loremTexts = faker.lorem.paragraph(8);
  return (
    <section id='works'>
        <h1 className='workstitle'>My PortFolio</h1>
        <span className='worksDesc'>{loremTexts}</span>
        <div className='worksImg'>
            <img src={portfolio1} alt='portfolio1' className='worksImgs'/>
            <img src={portfolio2} alt='portfolio2' className='worksImgs'/>
            <img src={portfolio3} alt='portfolio3' className='worksImgs'/>
            <img src={portfolio4} alt='portfolio4' className='worksImgs'/>
            <img src={portfolio5} alt='portfolio5' className='worksImgs'/>
            <img src={portfolio6} alt='portfolio6' className='worksImgs'/>
        </div>
        <button className='portfoliobtn'>See More</button>
    </section>
  )
}

export default Works
