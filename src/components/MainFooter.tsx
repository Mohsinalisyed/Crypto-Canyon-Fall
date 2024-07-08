import React from 'react'
import { Container } from '../lib'

const MainFooter = () => {
  return (
      <Container>
          <div style={{ borderTop: "1px solid grey", marginTop: "200px" }}></div>
          <div style={{margin:'32px 0' , display:"flex"}}>
              <div>
                  <strong>Google Play</strong>
                  <br />
                  Play Pass
                  <br />

                  Play Points
                  <br />

                  Gift cards
                  <br />

                  Redeem
                  <br />

                  Refund policy
              </div>
              <div style={{paddingLeft:"100px"}}>
              <strong>Kids & family</strong>
                  <br />

                  Parent Guide
                  <br />

                  Family sharing
              </div>
        </div>
    </Container>
  )
}

export default MainFooter