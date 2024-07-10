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
    const { slide } = location.state;
    return (
        <Box>
            <Suspense fallback={<Box style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>Loading...</Box>}>
                <LazyMain
                    name={slide.game.name}
                    logo={slide.game.icon.url}
                    apk_file={slide.game.apk.url}
                    videoUrl={slide.game.video[0].url}
                    download={slide.game.downloads}
                    rating={slide.game.rating}
                    user_name={slide.username}
                    solgan={slide.slogan}
                    devIcon={slide.icon}
                    all_games={slide.all_games}
                    slide={slide}
                />
                
                <LazySlider screen_shot={slide.game.screenshots} />
                <LazyContentSection about={slide.game.description} updated_on={slide.game.publishedAt} data_saftey={slide.game.data_saftey} />
                <LazyFooterSection />
            </Suspense>
        </Box>
    );
};

export default ViewGame;
