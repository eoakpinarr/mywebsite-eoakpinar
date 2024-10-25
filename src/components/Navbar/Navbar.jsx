// src/components/Navbar.js
import React from 'react';
import './navbar.css'; // Stil dosyası
import { Link } from 'react-router-dom';
import TemporaryDrawer from '../Drawer/TemporaryDrawer';
import gorsel from '../../images/letter-e.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__brand">
                <Link to="/"><img src={gorsel} alt="eoakpinar" width={25} height={25} className='mx-4' /></Link>
                <Link to="/">eoakpinar</Link>
            </div>
            <ul className="navbar__links">
                <li>
                    <Link to="/">Ana Sayfa</Link>
                </li>
                <li>
                    <Link to="/hakkimda">Hakkımda</Link>
                </li>
                <li>
                    <Link to="/hizmetler">Hizmetler</Link>
                </li>
                <li>
                    <Link to="/iletisim">İletişim</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <TemporaryDrawer />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
