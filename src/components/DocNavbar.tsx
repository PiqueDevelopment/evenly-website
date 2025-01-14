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

    const handleScroll = () => {
        if (sidebarRef.current) {
            sessionStorage.setItem('sidebarScrollPosition', sidebarRef.current.scrollTop);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const savedScrollPosition = sessionStorage.getItem('sidebarScrollPosition');
        if (sidebarRef.current && savedScrollPosition !== null) {
            sidebarRef.current.scrollTop = parseInt(savedScrollPosition, 10);
        }
    }, []);

    return (
        <div className={`container ${sidebarOpen ? '' : 'full-width'}`}>
            {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
            <div ref={sidebarRef} className={`sidebar ${sidebarOpen ? 'active' : ''}`} onScroll={handleScroll}>
                <ul className='sidebar-list'>
                    <li>
                        <NavLink 
                            to='/' 
                            className='sidebar-home'
                            activeClassName='active'
                        >
                            Evenly <i class="fa-solid fa-file-invoice"></i>
                        </NavLink>
                    </li>
                    {DocNavbarData.map((val, key) => (
                        val.title === "divider" ? (
                            <li key={key} className='divider'></li>
                        ) : (
                            <li className='row' key={key}>
                                <NavLink 
                                    to={val.link} 
                                    className='sidebar-text' 
                                    activeClassName='active'
                                >
                                    {val.title}
                                </NavLink>
                            </li>
                        )
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