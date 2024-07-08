import React from 'react';
import { BackArrow, Container, ForwardArrow, Text, TextH3 } from '../lib';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { StyledLogo } from './Main';
import { useNavigate } from 'react-router-dom';
import mainlogo from '../assets/icon.png';

const ArrowLeft = ({ currentSlide, slideCount, ...props } :any) => {
    const { onClick } = props;
    return (
        <BackButton id="back-btn" onClick={onClick}>
            <BackArrow />
        </BackButton>
    );
};

const ArrowRight = ({ currentSlide, slideCount, ...props }: any) => {
    const { onClick } = props;
    return (
        <ForwardButton id="forward-btn" onClick={onClick}>
            <ForwardArrow />
        </ForwardButton>
    );
};

const MainSlider = () => {
    const navigate =useNavigate()
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
            <div style={{ margin: '15px' }}>
                <TextH3 style={{ fontWeight: '600', fontSize: '20px' }}>Play mobile games on the big screen</TextH3>
                <Text style={{ color: '#5F6368', fontSize: '12px', fontWeight: '400' }}>Google Play Games on PC</Text>
            </div>
            <StyledSlider>
                <Slider {...MYSliderSetting}>
                    <div>
                        <MainVideo src={'https://firebasestorage.googleapis.com/v0/b/relaxeum-8755b.appspot.com/o/crypto%20canyon%2FCrypto%20Canyon%20Crash%20Adventure%20Video.mp4?alt=media&token=e87fca50-0000-4bfd-a61e-aef6b74d9248'} preload="auto" autoPlay muted loop />
                        <div style={{display:"flex",marginTop:"16px"}}>
                            <StyledLogo src={mainlogo} alt='logo' onClick={() => navigate('/crypto-canyon')} />
                            <div style={{marginLeft:"16px"}}>
                                <Text style={{ color: 'black', fontWeight: "500" }} onClick={() => navigate('/tongames')}>Ton Gamerz</Text>
                                <Text style={{ color: '#5F6368' }}>Sports</Text>
                                <Text style={{ color: '#5F6368' }}>4.5</Text>
                            </div>
                    </div>
                    </div>
                  
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
            width:  410px !important;
            padding:5px;
            cursor: pointer;


        }
    };     
`;
const MainVideo = styled.video`
  object-fit: cover;
  width:  400px;
  height:  250px;
  border-radius:8px;
`;
const ArrowButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #fff;
    height:60px;
    width:60px;
z-index:5;
border-radius:100%;
border:none;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
    outline: none;

`;

// Styled Back button
const BackButton = styled(ArrowButton)`
    left: -25px;
`;

// Styled Forward button
const ForwardButton = styled(ArrowButton)`
    right: 0;
`;