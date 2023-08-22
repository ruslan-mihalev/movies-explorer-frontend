import React, {useContext} from 'react';

import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function Header() {

  const currentUser = useContext(CurrentUserContext);

  return (
    <header className='header'>
      <div className='header__logo-container'>
        <Logo/>
      </div>
      <Navigation className='header__navigation-container' isAuthorized={!!currentUser}/>
    </header>
  );
}

export default Header;
