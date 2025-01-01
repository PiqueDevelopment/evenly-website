import React from 'react';
import { NavLink } from 'react-router-dom';
import './DocNavbar.css';
import { DocNavbarData } from './DocNavbarData.tsx';

function DocNavbar() {
    return (
        <div className='container'>
            <div className='sidebar'>
                <ul className='sidebar-list'>
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
        </div>
    );
}

export default DocNavbar;