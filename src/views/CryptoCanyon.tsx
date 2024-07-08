import React, { Suspense } from 'react';
import { Box } from '../lib';

// Lazy load components
const LazyMain = React.lazy(() => import('../components/Main'));
const LazySlider = React.lazy(() => import('../components/Slider'));
const LazyContentSection = React.lazy(() => import('../components/ContentSection'));
const LazyFooterSection = React.lazy(() => import('../components/FooterSection'));

const CryptoCanyon = () => {
        return (
            <Box>
                <Suspense fallback={<Box style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>Loading...</Box>}>
                    <LazyMain />
                    <LazySlider />
                    <LazyContentSection />
                    <LazyFooterSection />
                </Suspense>
            </Box>
        );
    };

export default CryptoCanyon
    ;
