import React from 'react';
import './DocNavbar.css';
import  { DocNavbarData } from './DocNavbarData.tsx';

function DocNavbar() {
    return (
        <div className='container'>
            <div className='sidebar'>
                <ul className='sidebar-list'>
                    {DocNavbarData.map((val, key) => (
                        <li className='row'>
                            <div className='sidebar-text'
                            key={key} 
                            onClick={() => { window.location.pathname = val.link }}
                            >
                                {val.title}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default DocNavbar;