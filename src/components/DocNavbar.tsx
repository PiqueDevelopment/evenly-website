import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './DocNavbar.css';
import { DocNavbarData } from './DocNavbarData.tsx';

const DocNavbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        if (!sidebarOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };

    useEffect(() => {
        if (sidebarOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [sidebarOpen]);

    return (
        <div>
            <div className={`overlay ${sidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
            <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
                <ul className='sidebar-list'>
                    <li>
                        <NavLink 
                            to='/' 
                            className='sidebar-home'
                            activeClassName='active'
                        >
                            Evenly <i className="fa-solid fa-file-invoice"></i>
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
            <div className="hamburger-menu" onClick={toggleSidebar}>
                <i className='fas fa-bars'></i>
            </div>
        </div>
    );
};

export default DocNavbar;