import React from 'react';
import { NavLink } from 'react-router-dom';
import './DocNavbar.css';
import { DocNavbarData } from './DocNavbarData.tsx';

function DocNavbar() {
    return (
        <div className='sidebar'>
            <ul className='sidebar-list'>
                <li >
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
    );
}

export default DocNavbar;