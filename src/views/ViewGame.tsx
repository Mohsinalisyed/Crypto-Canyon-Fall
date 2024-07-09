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
                <LazyMain name={slide.name} logo={slide.icon.data.attributes.url} apk_file={slide.apk.data.attributes.url} videoUrl={slide.video.data[0].attributes.url} rating={slide.rating} download={slide.downloads } />
                <LazySlider screen_shot={slide.screenshots.data} />
                <LazyContentSection about={slide.description} updated_on={slide.publishedAt} data_saftey={slide.data_saftey} />
                <LazyFooterSection />
            </Suspense>
        </Box>
    );
};

export default ViewGame;
