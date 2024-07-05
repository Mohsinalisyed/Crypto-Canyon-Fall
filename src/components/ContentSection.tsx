import React from 'react'
import { Container, Desc, TextH3 } from '../lib'
interface Iprops {
    about?: string
    aboutLine2?: string
    aboutLine3?: string
    updated_on?: string
    data_saftey?: string
    
}
const ContentSection: React.FC<Iprops> = ({ about, updated_on, data_saftey, aboutLine2, aboutLine3 }) => {
  return (
      <Container style={{marginTop:"32px"}}>
          <TextH3>About this app</TextH3>
          {about ? <Desc style={{ paddingTop: "8px" }}>{about} </Desc> : <Desc style={{paddingTop:"8px"}}>
              Introducing Crypto Canyon Fall: A thrilling adventure where you can not only experience the adrenaline-pumping excitement of down treacherous.
              <br />
              Get ready to embark on an epic journey through challenging canyons, filled with obstacles. Test your reflexes and precision as you navigate through narrow pathways, avoiding dangerous pitfalls and collecting valuable rewards along the way. Each level presents a unique set of challenges that will push your skills to the limit.
          </Desc>
          }
          {
              aboutLine2 && <Desc style={{ paddingTop: "32px" }}>{aboutLine2} </Desc> 
          }
          {
              aboutLine3 && <Desc style={{ paddingTop: "8px" }}>{aboutLine3} </Desc>
          }
          <div style={{ paddingTop:"24px",fontWeight:"600"}}>
              <h4 style={{marginBottom:'6px'}}>Updated on</h4>
              <Desc>{updated_on ? updated_on : 'Jun 27, 2024'}</Desc>
          </div>
          <div style={{ marginTop: "32px" }}>
              <TextH3>Data safety</TextH3>
              <Desc style={{ paddingTop: "8px" }}>
                  {data_saftey ? data_saftey :' Safety starts with understanding how developers collect and share your data. Data privacy and security practices may vary based on your use, region, and age. The developer provided this information and may update it over time.'}
              </Desc>
          </div>
    </Container>
  )
}

export default ContentSection