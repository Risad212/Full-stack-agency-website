import React from 'react';
import Brand from '../../Layout/Brand/Brand';
import Portfolio from '../../Layout/portfolio/Portfolio';
import Banner from '../../Layout/Banner/Banner';
import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/footer/Footer';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Brand />
            <Portfolio />
           <Footer />
        </div>
    );
};

export default HomePage;