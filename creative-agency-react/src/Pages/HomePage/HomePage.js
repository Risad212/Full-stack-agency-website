import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Brand from '../../components/Brand/Brand';
import Portfolio from '../../components/portfolio/Portfolio';
import Footer from '../../components/footer/Footer';

const HomePage = () => {
    return (
        <div>
           <Navbar />
           <Header />
           <Brand />
           <Portfolio />
           <Footer />
        </div>
    );
};

export default HomePage;