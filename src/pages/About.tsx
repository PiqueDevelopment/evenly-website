import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar.tsx';
import Footer from '../components/Footer.tsx';

export default function About() {
    return (
        <>
            <Navbar />
            <h1 className="about">About</h1>
            <Footer />
        </>
    );

}