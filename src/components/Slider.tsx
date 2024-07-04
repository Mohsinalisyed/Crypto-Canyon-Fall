import React from 'react'
import screenshot1 from '../assets/screenshot1.jpg'
import screenshot2 from '../assets/screenshot2.jpg'
import screenshot3 from '../assets/screenshot3.jpg'
import screenshot4 from '../assets/screenshot4.jpg'
import screenshot7 from '../assets/screenshot7.jpg'
import { Container } from '../lib'


const Slider = () => {
  return (
      <Container style={{marginTop:"32px"}}>
          <div className='sliderWrapper'>
              <img src={screenshot1} alt='screenshot1' className='slideImage' />
              <img src={screenshot2} alt='screenshot2' className='slideImage' />
              <img src={screenshot3} alt='screenshot3' className='slideImage' />
              <img src={screenshot4} alt='screenshot4' className='slideImage' />
              <img src={screenshot7} alt='screenshot7' className='slideImage' />
          </div>
     </Container>
  )
}

export default Slider