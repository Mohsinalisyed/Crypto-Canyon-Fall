import React from 'react'
import { Container } from '../lib'
import styled from 'styled-components'

interface Iprops {
  screen_shot?: any
}

const Slider: React.FC<Iprops> = ({ screen_shot }) => {
  return (
      <Container style={{marginTop:"32px"}}>
        {screen_shot ? (
        <SliderWrapper>
          {screen_shot.data.map((img:any, index:number) => (
            <SlideImage src={img.attributes.url} alt={`screenshot${index}`} key={index} />
         ))}
        </SliderWrapper>

      ) : null}
     
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
height: 350px;
border-radius: 8px;
margin-bottom: 16px;
@media(max-width: 600px) {
  width: 90%;
  height: auto;
  margin: 12px auto;
}
}`
