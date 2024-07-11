import React, { useState } from 'react';
import { Box, Mainheading, Text } from '../lib';
import styled from 'styled-components';
import { formatNumber } from '../utlis';
import { useNavigate } from 'react-router-dom';

interface Iprops {
  gameData: any;
  slide?: any;
}

const Main: React.FC<Iprops> = ({ gameData, slide }) => {
  const navigate = useNavigate();
  const [tooltipMessage, setTooltipMessage] = useState('');

  const handleInstall = () => {
    if (gameData && gameData.attributes.apk && gameData.attributes.apk.data.attributes.url) {
      const apkUrl = gameData.attributes.apk.data.attributes.url;
      const downloadLink = document.createElement('a');
      downloadLink.href = apkUrl;
      downloadLink.download = '';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  const handleShareClick = () => {
    const textToCopy = `${process.env.REACT_APP_FRONTEND_URL}/viewgame?id=${gameData.id}`;

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setTooltipMessage('Copied!');
        setTimeout(() => {
          setTooltipMessage('');
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };
  return (
    <StyledBackground>
      <MainContainer>
        <MainInner>
          <MainVideoBlock>
            <MainVideo src={gameData ? gameData.attributes.video.data[0].attributes.url : ""} preload="auto" autoPlay muted loop />
            <VideoCover />
          </MainVideoBlock>
          <MainInfo>
            <Mainheading>{gameData ? gameData.attributes.name : ''}</Mainheading>
            <StyledLink onClick={() => navigate('/tongames', { state: { slide } })}>
              {gameData && gameData.attributes.users_permissions_user && gameData.attributes.users_permissions_user.data.attributes.username}
            </StyledLink>
            <StyledParagraph>Contains ads</StyledParagraph>
            <StyledBcWrapper>
              {gameData && gameData.attributes.icon && (
                <StyledLogo src={gameData.attributes.icon.data.attributes.url} alt='logo' />
              )}
              <Box>
                <StyledH5>
                  {gameData && gameData.attributes.rating}
                  <StyledIcon className="material-icons">star</StyledIcon>
                </StyledH5>
                <Text>2K reviews</Text>
              </Box>
              <Box>
                <StyledH5>{formatNumber(gameData ? gameData.attributes.downloads : 0)}</StyledH5>
                <Text>Downloads</Text>
              </Box>
              <Box>
                <img className="large" src="https://bc91231.com/googleplay/imgs/e.svg" alt='eicon' />
                <Text>Everyone</Text>
              </Box>
            </StyledBcWrapper>
            <StyledBtnWrapper>
              <Box className='shareWrapper'>
                <StyledButton className='installbtn' onClick={handleInstall}>Install</StyledButton>
                <StyledShareOption onClick={handleShareClick}>
                  <StyledSvg className="f70z8e" fill='#6df378' viewBox="0 0 24 24">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                  </StyledSvg>
                  <StyledP>Share</StyledP>
                  {tooltipMessage && <Tooltip>{tooltipMessage}</Tooltip>}
                </StyledShareOption>
                <StyledShareOption onClick={handleInstall}>
                  <StyledSvg className="XkAcee" fill='#6df378' viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7 3H17C18.1045 3 19 3.8955 19 5V21L12 18L5 21L5.01075 5C5.01075 3.8955 5.8965 3 7 3ZM12 15.824L17 18V5H7V18L12 15.824ZM13 7V9H15V11H13V13H11V11H9V9H11V7H13Z" />
                  </StyledSvg>
                  <StyledP>Add to wishlist</StyledP>
                </StyledShareOption>
              </Box>
              <StyledButtonTrailer>
                <StyledIcon className="material-icons">play_arrow</StyledIcon>
                <Box>Trailer</Box>
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

const StyledLink = styled.p`
  color: #6df378;
  margin-top: 0;
  margin-bottom: 4px;
  text-decoration: none;
  cursor: pointer;
`;

const StyledParagraph = styled.p`
  color: #c8c8c8;
  margin-top: 0;
`;

const StyledBcWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 16px;
  gap: 50px;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    justify-content: center;
  }
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
  padding-top: 32px;
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
  border: none;
  outline: none;
  @media (max-width: 600px) {
    padding: 16px 60px;
  }
`;

const StyledButtonTrailer = styled.button`
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.54);
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
  color: #6df378;
  font-size: 16px;
  margin: 0;
  font-weight: 400;
  display: flex;
  align-items: center;
  cursor: pointer;
  position:relative;
`;

const StyledSvg = styled.svg`
  width: 24px;
  height: 24px;
`;

const StyledP = styled.p`
  padding-left: 8px;
  color: #6df378;
`;
const Tooltip = styled.span`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px;
  border-radius: 4px;
  top: -30px; /* Adjust as needed */
  left: 50%;
  transform: translateX(-50%);
`;