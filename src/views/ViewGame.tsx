import React, { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '../lib';
import { useGameData } from '../utlis';

// Lazy load components
const LazyMain = React.lazy(() => import('../components/Main'));
const LazySlider = React.lazy(() => import('../components/Slider'));
const LazyContentSection = React.lazy(() => import('../components/ContentSection'));
const LazyFooterSection = React.lazy(() => import('../components/FooterSection'));

const ViewGame = () => {
    const location = useLocation();
    const { slide } = location.state;
    const params = new URLSearchParams(location.search);
    const gameIdFromSearch = params.get('id');
    const { data: gameData } = useGameData(gameIdFromSearch);
    return (
        <Box>
            <Suspense fallback={<Box style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>Loading...</Box>}>
                <LazyMain
                    gameData={gameData}
                    slide={slide}
                />
                
                <LazySlider screen_shot={gameData && gameData.attributes.screenshots} />
                <LazyContentSection about={gameData && gameData.attributes.description} updated_on={gameData && gameData.attributes.publishedAt} />
                <LazyFooterSection />
            </Suspense>
        </Box>
    );
};

export default ViewGame;
