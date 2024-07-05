import React from 'react'
import screenshot1 from '../assets/screenshot1.jpg'
import screenshot2 from '../assets/screenshot2.jpg'
import screenshot3 from '../assets/screenshot3.jpg'
import screenshot4 from '../assets/screenshot4.jpg'
import screenshot7 from '../assets/screenshot7.jpg'
import { Container } from '../lib'
import styled from 'styled-components'

interface Iprops {
  screen_shot?: string[]
}
const mainGameSS = [
  screenshot1,
  screenshot2,
  screenshot3,
  screenshot4,
  screenshot7
]
const Slider: React.FC<Iprops> = ({ screen_shot }) => {
  return (
      <Container style={{marginTop:"32px"}}>
      
        {screen_shot ? (
        <SliderWrapper>
         { screen_shot.map((img, index) => (
           <SlideImage src={img} alt={`screenshot${index}`} className='slideImage' key={index} />
         ))}
        </SliderWrapper>

      ) : (
          <SliderWrapper>
            {mainGameSS?.map((img, index) => (
              <SlideImage src={img} alt={`screenshot${index}`} className='slideImage' key={index} />
            ))}
          </SliderWrapper>
        )}
     
     </Container>
  )
}

export default Slider
const SliderWrapper = styled.div`
  display: flex;
justify-content:space-between;
overflow-x: auto;
gap:20px;
` 

const SlideImage = styled.img`
max-width: 250px;
height: 400px;
border-radius: 8px;
margin-bottom: 16px;
@media(max - width: 600px) {
  width: 90 %;
  height: auto;
  margin: 12px auto;
}`
