import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar.tsx';
import Footer from '../components/Footer.tsx';

export default function Download() {
    return (
        <>
            <Navbar />
            <h1 className="download">Download</h1>
            <Footer />
        </>
    );
}