import React from 'react';
import { BackArrow, Box, Container, ForwardArrow, Text, TextH3 } from '../lib';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Game, Icon, User } from '../utlis';

interface Iprops {
    userData: User[]
}
const ArrowLeft = ({ currentSlide, slideCount, ...props }: any) => {
    const { onClick } = props;
    const isVisible = currentSlide !== 0;

    return (
        <BackButton id="back-btn" onClick={onClick} style={{ display: isVisible ? 'block' : 'none' }}>
            <BackArrow />
        </BackButton>
    );
};

const ArrowRight = ({ currentSlide, slideCount, ...props }: any) => {
    const { onClick } = props;
    const isVisible = currentSlide !== slideCount - 1;
    return (
        <ForwardButton id="forward-btn" onClick={onClick} style={{ display: isVisible ? 'block' : 'none' }}>
            <ForwardArrow />
        </ForwardButton>
    );
};

const MainSlider: React.FC<Iprops> = ({ userData }) => {
    const navigate = useNavigate();
    const filteredGames = userData && userData?.map((slide:User) => {
        const featuredGame = slide.games.find((game: Game) => game.is_featured);
        const defaultGame = slide.games[0];
        const res: {
            username: string;
            icon: Icon;
            all_games: Game[];
            solgan: string;
            game: Game;
        } = {
            username: slide.username,
            icon: slide.icon,
            all_games: slide.games,
            solgan: slide.slogan,
            game: featuredGame || defaultGame
        };
        return res;
    });
    const MYSliderSetting = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        nextArrow: <ArrowRight />,
        prevArrow: <ArrowLeft />,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };
    return (
        <Container style={{ paddingTop: '72px' }}>
            <Box style={{ margin: '15px' }}>
                <TextH3 style={{ fontWeight: '600', fontSize: '20px' }}>Play mobile games on the big screen</TextH3>
                <Text style={{ color: '#5F6368', fontSize: '12px', fontWeight: '400' }}>Google Play Games on PC</Text>
            </Box>
            <StyledSlider>
                <Slider {...MYSliderSetting}>
                    {filteredGames && filteredGames.map((slide, index: number) => (
                        <Box key={index}>
                            <MainVideo src={slide.game.video[0].url} preload="auto" autoPlay muted loop />
                            <Box style={{ display: "flex", marginTop: "16px" }}>
                                <StyledLogo src={slide.game.icon.url} alt={slide.game.icon.url} onClick={() => navigate('/viewgame', { state: {slide, item: slide.game, username:slide.username } })} />
                                <Box style={{ marginLeft: "16px" }}>
                                    <Text style={{ color: 'black', fontWeight: "500" }}>{slide.game.name}</Text>
                                    <Text style={{ color: '#5F6368' }} onClick={() => navigate('/tongames', { state: { slide } })}><u>{slide.username }</u></Text>
                                    <Text style={{ color: '#5F6368', fontSize: "16px" }}>{slide.game.category}</Text>
                                    <Text style={{ color: '#5F6368', fontSize: "16px" }}>{slide.game.rating} <StyledIcon className="material-icons">star</StyledIcon></Text>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Slider>
            </StyledSlider>
        </Container>
    );
};

export default MainSlider;

const StyledSlider = styled.div`
    .slick-list {
        overflow: hidden;
        .slick-track {
            display: flex !important;
            width: 100% !important;
        }
        .slick-slide {
            margin: 10px;
            box-sizing: border-box;
            width: 410px !important;
            padding: 5px;
            cursor: pointer;
             @media (max-width: 600px) {
              width: 310px !important;
              };
        }
    }
`;

const MainVideo = styled.video`
    object-fit: cover;
    width: 400px;
    height: 250px;
    border-radius: 8px;
    @media (max-width: 600px) {
     width: 300px;
     };
`;

const ArrowButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #fff;
    height: 60px;
    width: 60px;
    z-index: 5;
    border-radius: 100%;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
    outline: none;
`;

const BackButton = styled(ArrowButton)`
    left: -25px;
`;

const ForwardButton = styled(ArrowButton)`
    right: 0;
`;

const StyledIcon = styled.i`
    font-size: 14px;
`;
const StyledLogo = styled.img`
  height: 90px;
  border-radius: 16px;
`;
