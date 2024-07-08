import React, { Suspense } from 'react';

// Lazy load components
const LazyMain = React.lazy(() => import('../components/Main'));
const LazySlider = React.lazy(() => import('../components/Slider'));
const LazyContentSection = React.lazy(() => import('../components/ContentSection'));
const LazyFooterSection = React.lazy(() => import('../components/FooterSection'));

const Home = () => {
    return (
        <div>
            <Suspense fallback={<div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>Loading...</div>}>
                <LazyMain />
                <LazySlider />
                <LazyContentSection />
                <LazyFooterSection />
            </Suspense>
        </div>
    );
};

export default Home;
