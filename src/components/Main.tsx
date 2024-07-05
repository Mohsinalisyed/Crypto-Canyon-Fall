import React from 'react';
import { Mainheading, Text } from '../lib';
import mainlogo from '../assets/icon.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Iprops {
    name?: string;
    logo?: string;
    nameLine2?:string
}
const Main: React.FC<Iprops> = ({ name, logo, nameLine2 }) => {
    const handleInstall = () => {
        const apkUrl = '/Cryptocanyon.apk';
        const downloadLink = document.createElement('a');
        downloadLink.href = apkUrl;
        downloadLink.download = '';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <StyledBackground>
            <MainContainer>
                <MainInner>
                    <MainVideoBlock>
                        <MainVideo src={'/videocrypto.mp4'} preload="auto" autoPlay muted loop />
                        <VideoCover />
                    </MainVideoBlock>
                    <MainInfo>
                        <Mainheading>{name ? name : 'Crypto Canyon Fall'} {nameLine2 && nameLine2 }</Mainheading>
                        <StyledLink to={'/tongames'}>Ton.Gamerz</StyledLink>
                        <StyledParagraph>Contains ads</StyledParagraph>
                        <StyledBcWrapper>
                            <StyledLogo src={logo ? logo : mainlogo} alt='logo' />
                            <div>
                                <StyledH5>
                                    4.7 <StyledIcon className="material-icons">star</StyledIcon>
                                </StyledH5>
                                <Text>2K reviews</Text>
                            </div>
                            <div>
                                <StyledH5>100K +</StyledH5>
                                <Text>Downloads</Text>
                            </div>
                            <div>
                                <img className="large" src="https://bc91231.com/googleplay/imgs/e.svg" alt='eicon' />
                                <Text>Everyone</Text>
                            </div>
                        </StyledBcWrapper>
                        <StyledBtnWrapper>
                            <div className='shareWrapper'>
                                <StyledButton className='installbtn' onClick={handleInstall}>Install</StyledButton>
                                <StyledShareOption onClick={handleInstall}>
                                    <StyledSvg className="f70z8e" fill='#6df378' viewBox="0 0 24 24">
                                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                                    </StyledSvg>
                                    <StyledP>Share</StyledP>
                                </StyledShareOption>
                                <StyledShareOption onClick={handleInstall}>
                                    <StyledSvg className="XkAcee" fill='#6df378' viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 3H17C18.1045 3 19 3.8955 19 5V21L12 18L5 21L5.01075 5C5.01075 3.8955 5.8965 3 7 3ZM12 15.824L17 18V5H7V18L12 15.824ZM13 7V9H15V11H13V13H11V11H9V9H11V7H13Z" />
                                    </StyledSvg>
                                    <StyledP>Add to wishlist</StyledP>
                                </StyledShareOption>
                            </div>
                            <StyledButtonTrailer>
                                <StyledIcon className="material-icons">play_arrow</StyledIcon>
                                <div>Trailer</div>
                            </StyledButtonTrailer>
                        </StyledBtnWrapper>
                    </MainInfo>
                </MainInner>
            </MainContainer>
        </StyledBackground>
    );
};

export default Main;

// Styled Components

const StyledBackground = styled.div`
  background: black;
`;

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
  padding: 19% 12px 5% 12px;
  background: linear-gradient(90deg, #212123 0, transparent 56%),
    linear-gradient(0deg, #212123 0, transparent 56%),
    linear-gradient(270deg, #212123 0, transparent 56%);
  width: 100%;
  @media (max-width: 600px) {
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  color: #6df378;
  margin-bottom: 4px;
  text-decoration: none;
`;

const StyledParagraph = styled.p`
  color: #c8c8c8;
  margin-top: 0;
`;

const StyledBcWrapper = styled.div`
display: flex;
  align-items: center;
  padding-top:16px;
  gap: 50px;
  flex-wrap: wrap;
  @media (max-width: 600px) {
      justify-content: center;
    };
`;

const StyledLogo = styled.img`
  height: 70px;
  border-radius: 16px;
`;

const StyledH5 = styled.h5`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled.i`
  font-size: 16px;
  padding-left: 4px;
`;

const StyledBtnWrapper = styled.div`
   width: 100%;
  padding-top:32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
  flex-direction: column;
  align-items: center;
  }
`;

const StyledButton = styled.button`
  padding: 16px 100px;
  background-color: #6df378;
  font-size: 18px;
  font-weight: 700;
  color: #202124;
  border-radius: 8px;
  cursor: pointer;
  border:none;
  outline: none;
  @media (max-width: 600px) {
  padding: 16px 60px;    }
`;

const StyledButtonTrailer = styled.button`
    display: flex;
  align-items: center;
  background-color:rgba(0, 0, 0, .54);
  border: 0;
  border-radius: 56px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 300;
  outline: 0;
  padding: 14px 21px;
  text-align: center;
  text-decoration: none;
    @media (max-width: 600px) {
        margin-top: 24px;
      }
`;
const StyledShareOption = styled.div`
  color:#6df378;
  font-size: 16px;
  margin: 0;
  font-weight: 400;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledSvg = styled.svg`
  width: 24px;
  height: 24px;
`;

const StyledP = styled.p`
  padding-left: 8px;
  color:#6df378;
`;

