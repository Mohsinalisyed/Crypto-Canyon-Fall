import React from 'react'
import { Container, Desc, TextH3 } from '../lib'

const ContentSection = () => {
  return (
      <Container style={{marginTop:"32px"}}>
          <TextH3>About this app</TextH3>
          <Desc style={{paddingTop:"8px"}}>
              Introducing Crypto Canyon Fall: A thrilling adventure where you can not only experience the adrenaline-pumping excitement of down treacherous.
              <br />
              Get ready to embark on an epic journey through challenging canyons, filled with obstacles. Test your reflexes and precision as you navigate through narrow pathways, avoiding dangerous pitfalls and collecting valuable rewards along the way. Each level presents a unique set of challenges that will push your skills to the limit.
          </Desc>
          <div style={{ paddingTop:"24px",fontWeight:"600"}}>
              <h4 style={{marginBottom:'6px'}}>Updated on</h4>
              <Desc>Jun 27, 2024</Desc>
          </div>
          <div style={{ marginTop: "32px" }}>
              <TextH3>Data safety</TextH3>
              <Desc style={{ paddingTop: "8px" }}>
                  Safety starts with understanding how developers collect and share your data. Data privacy and security practices may vary based on your use, region, and age. The developer provided this information and may update it over time.
              </Desc>
          </div>
    </Container>
  )
}

export default ContentSection