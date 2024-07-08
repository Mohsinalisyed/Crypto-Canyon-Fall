import React, { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '../lib';

// Lazy load components
const LazyMain = React.lazy(() => import('../components/Main'));
const LazySlider = React.lazy(() => import('../components/Slider'));
const LazyContentSection = React.lazy(() => import('../components/ContentSection'));
const LazyFooterSection = React.lazy(() => import('../components/FooterSection'));

const ViewGame = () => {
    const location = useLocation();
    const { item } = location.state;

    return (
        <Box>
            <Suspense fallback={<Box style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>Loading...</Box>}>
                <LazyMain name={item.name} nameLine2={item.nameLine2} logo={item.logo} apk_file={item.apk_file} videoUrl={item.video_url} />
                <LazySlider screen_shot={item.screen_shot} />
                <LazyContentSection about={item.about} updated_on={item.updated_on} data_saftey={item.data_saftey} aboutLine2={item.aboutLine2} aboutLine3={item.aboutLine3} />
                <LazyFooterSection />
            </Suspense>
        </Box>
    );
};

export default ViewGame;
