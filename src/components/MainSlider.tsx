import React from 'react';
import { BackArrow, Box, Container, ForwardArrow, Text, TextH3 } from '../lib';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import mainlogo from '../assets/icon.png';

const ArrowLeft = ({ currentSlide, slideCount, ...props }:any) => {
    const { onClick } = props;
    // Show BackArrow only if not on the first slide
    const isVisible = currentSlide !== 0;

    return (
        <BackButton id="back-btn" onClick={onClick} style={{ display: isVisible ? 'block' : 'none' }}>
            <BackArrow />
        </BackButton>
    );
};

const ArrowRight = ({ currentSlide, slideCount, ...props }:any) => {
    const { onClick } = props;
    // Show ForwardArrow only if not on the last slide
    const isVisible = currentSlide !== slideCount - 1;

    return (
        <ForwardButton id="forward-btn" onClick={onClick} style={{ display: isVisible ? 'block' : 'none' }}>
            <ForwardArrow />
        </ForwardButton>
    );
};

const MainSlider = () => {
    const navigate = useNavigate();

    // Array of data objects for each slide
    const slidesData = [
        {
            videoSrc: 'https://firebasestorage.googleapis.com/v0/b/relaxeum-8755b.appspot.com/o/crypto%20canyon%2FCrypto%20Canyon%20Crash%20Adventure%20Video.mp4?alt=media&token=e87fca50-0000-4bfd-a61e-aef6b74d9248',
            logoSrc: mainlogo,
            logoAlt: 'logo1',
            navigateToLogo: '/crypto-canyon',
            gameName:"Crypto Canyon Fall",
            title: 'Ton Gamerz',
            category: 'Sports',
            rating: '4.5',
        },
    ];

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
                    {/* Map over slidesData array to generate slides */}
                    {slidesData.map((slide, index) => (
                        <Box key={index}>
                            <MainVideo src={slide.videoSrc} preload="auto" autoPlay muted loop />
                            <Box style={{ display: "flex", marginTop: "16px" }}>
                                <StyledLogo src={slide.logoSrc} alt={slide.logoAlt} onClick={() => navigate(slide.navigateToLogo)} />
                                <Box style={{ marginLeft: "16px" }}>
                                    <Text style={{ color: 'black', fontWeight: "500" }}>{slide.gameName}</Text>
                                    <MainLink style={{ color: '#5F6368' }} to={'/tongames'}><u>{slide.title}</u></MainLink>
                                    <Text style={{ color: '#5F6368',fontSize:"16px" }} >{slide.category}</Text>
                                    <Text style={{ color: '#5F6368', fontSize: "16px" }}>{slide.rating} <StyledIcon className="material-icons">star</StyledIcon></Text>
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
const MainLink = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: #5f6368;
`;