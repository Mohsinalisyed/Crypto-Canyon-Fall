import React from 'react'
import { Mainheading, Text } from '../lib'
import logo  from '../assets/icon.png'
import styled from 'styled-components'
const Main = () => {
    return (
        <div style={{ background: "black" }}> 
            <MainContainer>
                <MainInner>
                    <MainVideoBlock>
                        <MainVideo src={'/videocrypto.mp4'} preload="auto" autoPlay muted loop />
                        <VideoCover />
                    </MainVideoBlock>
                    <MainInfo>
                        <Mainheading>Crypto Canyon Fall</Mainheading>
                        <p style={{ color: "#6df378", marginBottom: "8px" }}>Ton.Gamerz</p>
                        <p style={{ color: "#c8c8c8", marginTop: "0" }}>Contains ads</p>
                        <div className='bcwrapper'>
                            <img src={logo} alt='logo' style={{ height: "70px", borderRadius: "16px" }} />
                            <div>
                                <h5 style={{ display: "flex", alignItems: "center" }}>4.7
                                    <i className="material-icons" style={{fontSize:"16px" ,paddingLeft:"4px"}}>star</i></h5>
                                <Text>2K reviews</Text>
                            </div>
                            <div>
                                <h5>100K +</h5>
                                <Text>Downloads</Text>
                            </div>
                            <div>
                                <img className="large" src="https://bc91231.com/googleplay/imgs/e.svg" alt='eicon'/>
                                <Text>Everyone</Text>
                            </div>
                        </div>
                        <div className='btnwrapper'>
                            <div className='shareWrapper'>
                                <button className='installbtn'>Install</button>
                                <div className='shareOption'>
                                    <svg className="f70z8e" width="24" height="24" viewBox="0 0 24 24" fill='#6df378'>
                                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z">
                                        </path></svg>
                                    <p style={{paddingLeft:"8px"}}>Share</p>
                                    
                                </div>
                                <div className='shareOption'>
                                    <svg className="XkAcee" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 3H17C18.1045 3 19 3.8955 19 5V21L12 18L5 21L5.01075 5C5.01075 3.8955 5.8965 3 7 3ZM12 15.824L17 18V5H7V18L12 15.824ZM13 7V9H15V11H13V13H11V11H9V9H11V7H13Z" fill='#6df378'></path></svg>
                                    <p style={{ paddingLeft: "8px" }}>Add to wishlist</p>
                                </div>

                            </div>
                            <div>
                                <button className='trailerbtn'>
                                    <i className="material-icons">play_arrow</i>
                                    <div style={{paddingLeft:'8px'}}>Trailer</div>
                                </button>
                            </div>
                        </div>
                    </MainInfo>
                </MainInner>
            </MainContainer>
            </div>

  )
}

export default Main

const MainContainer = styled.div`
  background-color: #212123;
  overflow: hidden;
`;
const MainInner = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;
const MainVideoBlock = styled.div`
  z-index: 1;
  position: absolute;
  right: 0;
  top: 0;
  width: calc(2.55682 * min(100vw, 440px));
  height: calc(1.43636 * min(100vw, 440px));
`;
const MainVideo = styled.video`
  object-fit: cover;
  position: absolute;
  right: 0;
  width: calc(2.55682 * min(100vw, 440px));
  height: calc(1.43636 * min(100vw, 440px));
   @media (max-width: 600px) {
    width: 600px;
  }
`;

const VideoCover = styled.div`
  overflow: hidden;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  background: linear-gradient(90deg, #212123 0, transparent 56%),
    linear-gradient(0deg, #212123 0, transparent 56%),
    linear-gradient(270deg, #212123 0, transparent 56%);
`;

const MainInfo = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    padding:20% 12px  5% 12px;
    background: linear-gradient(90deg, #212123 0, transparent 56%),
    linear-gradient(0deg, #212123 0, transparent 56%),
    linear-gradient(270deg, #212123 0, transparent 56%);
    width: 100%;
    .heading{
        color: white;
        font-size: ;
    }
`