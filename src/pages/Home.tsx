import { React } from 'react';
import '../App.css';
import Hero from '../components/Hero.tsx';
import Cards from '../components/Cards.tsx';
import Navbar from '../components/Navbar.tsx';
import Footer from '../components/Footer.tsx';


function Home () {
    return (
        <>
            <Navbar />
            <Hero />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;