import React from 'react';
import { useLocation } from 'react-router-dom';
import Main from '../components/Main';
import Slider from '../components/Slider';
import ContentSection from '../components/ContentSection';
import FooterSection from '../components/FooterSection';

const ViewGame = () => {
    const location = useLocation();
    const { item } = location.state;
    return (
        <div>
            <Main name={item.name} nameLine2={item.nameLine2} logo={item.logo} apk_file={item.apk_file } />
            <Slider screen_shot={item.screen_shot} />
            <ContentSection about={item.about} updated_on={item.updated_on} data_saftey={item.data_saftey} aboutLine2={item.aboutLine2} aboutLine3={item.aboutLine3} />
            <FooterSection />
        </div>
    );
};

export default ViewGame;
