import React from 'react';
import Brand from '../../Layout/Brand/Brand';
import Portfolio from '../../Layout/portfolio/Portfolio';
import Banner from '../../Layout/Banner/Banner';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Brand />
           <Portfolio />
        </div>
    );
};

export default HomePage;