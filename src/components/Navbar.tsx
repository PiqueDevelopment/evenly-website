import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button.tsx';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton); // Shows the button whenever the screen is resized

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Evenly <i className='fab fa-typo3'></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/docs' className='nav-links' onClick={closeMobileMenu}>
                                Docs
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to='/download' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Get Evenly 
                            </Link>
                        </li>
                    </ul>
                        {button && <Button to='/download' buttonStyle='btn--outline' children={undefined} type={undefined} onClick={undefined} buttonSize={undefined}>Get Evenly</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;