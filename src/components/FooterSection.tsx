import React from 'react'
import { Container, Desc } from '../lib'
// import bcgamevideo from '../assets/videocrypto'
const FooterSection = () => {
  return (
      <Container style={{ marginTop: "32px",marginBottom:"32px" }}>
          <div className='FooterSection'>
              <div className='footerStyle'>
                  <img src="https://bc91231.com/googleplay/imgs/share.svg" alt="" style={{ paddingRight: "8px" }}></img>
                  <div>
                      <Desc>No data shared with third parties</Desc>
                      <a style={{ fontSize: "12px", textDecoration: "none", color: "#5f6368" }} href='###'>Learn more about how developers declare sharing</a>
                 </div>
              </div>
              <div className='footerStyle'>
                  <img src="https://bc91231.com/googleplay/imgs/up.svg" alt="" style={{ paddingRight: "8px" }}></img>
                  <div>  <Desc>No data collected</Desc>
                   <a style={{ fontSize: "12px", textDecoration: "none", color: "#5f6368" }} href='###'>Learn more about how developers declare collection</a>
              </div>
              </div>
              <div className='footerStyle'>
                  <img src="https://bc91231.com/googleplay/imgs/lock.svg" alt="" style={{paddingRight:"8px"}}></img>  
                  <Desc>Data is encrypted in transit</Desc>
              </div>
              <div className='footerStyle'>
                  <img src="https://bc91231.com/googleplay/imgs/delete.svg" alt="" style={{ paddingRight: "8px" }}></img>
                  
                  <Desc>Data can’t be deleted</Desc>
              </div>
          </div>
     </Container>
  )
}

export default FooterSection