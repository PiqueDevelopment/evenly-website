import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './DocNavbar.css';
import { DocNavbarData } from './DocNavbarData.tsx';

function DocNavbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setSidebarOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`container ${sidebarOpen ? '' : 'full-width'}`}>
            {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
            <div ref={sidebarRef} className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
                <ul className='sidebar-list'>
                    <li>
                        <NavLink 
                            to='/' 
                            className='sidebar-home'
                            activeClassName='active'
                        >
                            Evenly <i className='fab fa-typo3'></i>
                        </NavLink>
                    </li>
                    <hr className='rounded' />
                    {DocNavbarData.map((val, key) => (
                        <li className='row' key={key}>
                            <NavLink 
                                to={val.link} 
                                className='sidebar-text' 
                                activeClassName='active'
                            >
                                {val.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`hamburger-menu ${sidebarOpen ? 'hidden' : ''}`} onClick={toggleSidebar}>
                <i className='fas fa-bars'></i>
            </div>
        </div>
    );
}

export default DocNavbar;