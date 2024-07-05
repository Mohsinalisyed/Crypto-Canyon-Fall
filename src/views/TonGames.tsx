import React from 'react';
import styled from 'styled-components';
import { Container, Text } from '../lib';
import { GamesData } from '../gamesdata';
import { useNavigate } from 'react-router-dom';

const TonGames = () => {
  const navigate = useNavigate()
  return (
    <StyledContainer>
      <TonContainer>
        <TonLogoContainer>
          <PlayButton>
            <PlayButtonText>PLAY</PlayButtonText>
          </PlayButton>
          <TonText>Ton.Gamerz</TonText>
        </TonLogoContainer>
        <PlayDescription>
          <StyledTextH3>Play the Best Games on Google Play.</StyledTextH3>
        </PlayDescription>
      </TonContainer>
      <GamesBox>
        <MoreGamesHeading>More by Ton.Gamerz</MoreGamesHeading>
        <MoreGamesWrapper>
          {GamesData.map((item, index) => (
            <GameItem key={index} onClick={() => navigate('/viewgame', { state: { item } })}>
              <GameImage src={item.logo} alt={item.name} />
              <StyledTextH3>{item.name}</StyledTextH3>
              {item.nameLine2 && <StyledTextH3>{item.nameLine2}</StyledTextH3>}

            </GameItem>
          ))}
        </MoreGamesWrapper>
      </GamesBox>
      <AdditionalInfoWrapper>
        <StyledTonText>Additional Information</StyledTonText>
        <StyledTextH3>Report</StyledTextH3>
        <StyledLink href="###">Flag as inappropriate</StyledLink>
      </AdditionalInfoWrapper>
    </StyledContainer>
  );
};

export default TonGames;

const StyledContainer = styled(Container)`
  /* If Container is a styled component, apply its styles here */
`;

const TonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 12px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }
`;

const TonLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const PlayButtonText = styled(Text)`
  color: skyblue;
  font-weight: 700;
`;

const TonText = styled.h4`
  font-size: 48px;
  font-weight: 400;
  margin: 0 0 25px 0;

  @media (max-width: 1000px) {
    margin: 0;
    font-size:24px;
  }
`;

const PlayDescription = styled.div`
  padding: 0 0 40px 0;
  width: 50%;

  @media (max-width: 1000px) {
    width: 80%;
    padding: 0 0 0 20%;
  }
`;

const GamesBox = styled.div`
  padding: 0 12px;
`;

const MoreGamesHeading = styled.h4`
  font-size: 24px;
  font-weight: 500;
  margin: 0;
`;

const MoreGamesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 32px;
`;

const GameItem = styled.div`
  margin-right: 20px;
  margin-bottom: 20px;
`;

const GameImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 20px;
`;

const AdditionalInfoWrapper = styled.div`
  padding: 32px 0;
`;

const StyledTonText = styled(TonText)`
  font-size: 32px;
  margin: 0;
`;
export const TextH3 = styled.h3`
  font-size: 16px;
  margin: 0;
  font-weight: 400;
  word-break: break-word;
`;
const StyledTextH3 = styled(TextH3)`
  font-weight: 400;
  font-size: 18px;
  margin-top: 8px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-size: 15px;
  font-weight: 400;
  color: #15c;
`;


