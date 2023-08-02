import React from 'react';

import './Header.css';
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

function Header() {
    return (
        <header className='header'>
            <div className='header__logo-container'>
                <Logo />
            </div>
            <Navigation />
        </header>
    );
}

export default Header;