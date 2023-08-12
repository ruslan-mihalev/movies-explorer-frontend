import React from 'react';

import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

function Header({ isAuthorized }) {
    return (
        <header className='header'>
            <div className='header__logo-container'>
                <Logo />
            </div>
            <Navigation className='header__navigation-container' isAuthorized={isAuthorized} />
        </header>
    );
}

export default Header;