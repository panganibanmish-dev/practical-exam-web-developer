import React from 'react';
import '../../App.css'
import Cards from '../Cards';
import Footer from '../Footer';
import FooterSection from '../FooterSection';
import HeroSection from '../HeroSection'
import Section from '../Section';

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Section />
            <Footer />
            <FooterSection />
        </>
    )
}

export default Home;