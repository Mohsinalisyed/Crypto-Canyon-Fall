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
    const { slide , item, username} = location.state;

    return (
        <Box>
            <Suspense fallback={<Box style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>Loading...</Box>}>
                <LazyMain
                    name={item.name}
                    logo={item.icon.url}
                    apk_file={item.apk.url}
                    videoUrl={item.video[0].url}
                    download={item.downloads}
                    rating={item.rating}
                    user_name={username}
                    solgan={item.slogan}
                    devIcon={item.icon}
                    all_games={item.all_games}
                    slide={slide}
                />
                
                <LazySlider screen_shot={item.screenshots} />
                <LazyContentSection about={item.description} updated_on={item.publishedAt} data_saftey={item.data_saftey} />
                <LazyFooterSection />
            </Suspense>
        </Box>
    );
};

export default ViewGame;
