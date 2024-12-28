import React from 'react'
import './Footer.css'

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
    <div className='footer-container'>
        <p className='footer-text'>
            Copyright {'\u00A9'} {currentYear} Evenly
        </p>
    </div>
    )
}

export default Footer