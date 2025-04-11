import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import React from 'react'
import './Navbar.css'

import comp_logov1 from '/src/assets/logov1.png'

const Navbar = () => {
    return (
        <>
            <header>
                <div className="header">
                    <div className="temp_wrapper">
                        <div className="header_con">
                            <div className="logo">
                                <figure><img src={comp_logov1} alt="" /></figure>
                                <h1>Cebu<span>Coder</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <nav>
                <div className='navbar'>
                    <div className="temp_wrapper">
                        <div className="navbar_con">
                            <ul className='navbar_list'>
                                <li>
                                    <ion-icon name="albums-outline"></ion-icon>
                                    <NavLink to="/" className={({ isActive }) => isActive ? 'active_nav' : ''}>Projects</NavLink>
                                </li>
                                <li>
                                    <ion-icon name="terminal-outline"></ion-icon>
                                    <NavLink to="/source-code" className={({ isActive }) => isActive ? 'active_nav' : ''}>Source Code</NavLink>
                                </li>
                                <li>
                                    <ion-icon name="ribbon-outline"></ion-icon>
                                    <NavLink to="/certificate" className={({ isActive }) => isActive ? 'active_nav' : ''}>Certificate</NavLink>
                                </li>
                                <li>
                                    <ion-icon name="briefcase-outline"></ion-icon>
                                    <NavLink to="/services" className={({ isActive }) => isActive ? 'active_nav' : ''}>Services</NavLink>
                                </li>
                                <li>
                                    <ion-icon name="folder-outline"></ion-icon>
                                    <NavLink to="/project-assets" className={({ isActive }) => isActive ? 'active_nav' : ''}>Project Assets</NavLink>
                                </li>
                                <li>
                                    <ion-icon name="images-outline"></ion-icon>
                                    <NavLink to="/stock-photos" className={({ isActive }) => isActive ? 'active_nav' : ''}>Stock Photos</NavLink>
                                </li>
                                <li>
                                    <ion-icon name="layers-outline"></ion-icon>
                                    <NavLink to="/templates" className={({ isActive }) => isActive ? 'active_nav' : ''}>Templates</NavLink>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
