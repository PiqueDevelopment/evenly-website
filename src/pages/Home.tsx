import { React } from 'react';
import '../App.css';
import Hero from '../components/Hero.tsx';
import Cards from '../components/Cards.tsx';

function Home () {
    return (
        <>
            <Hero />
            <Cards />
        </>
    );
}

export default Home;