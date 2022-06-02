import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Brand from '../../components/Brand/Brand';
import Services from '../../components/Services/Services';
import Portfolio from '../../components/portfolio/Portfolio';
import Client from '../../components/Client/Client';
import Footer from '../../components/footer/Footer';

const HomePage = () => {
    return (
        <div>
           <Navbar />
           <Header />
           <Brand />
           <Services />
           <Portfolio />
           <Client />
           <Footer />
        </div>
    );
};

export default HomePage;