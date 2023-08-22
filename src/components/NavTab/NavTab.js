import React from 'react';

import './NavTab.css';
import {HashLink} from 'react-router-hash-link';

function NavTab() {
  return (
    <nav className='nav-tab'>
      <ul className='nav-tab__container'>
        <li className='nav-tab__link-wrapper'>
          <HashLink to='#about-project' className='nav-tab__link'>О проекте</HashLink>
        </li>
        <li>
          <HashLink to='#techs' className='nav-tab__link'>Технологии</HashLink>
        </li>
        <li>
          <HashLink to='#about-me' className='nav-tab__link'>Студент</HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
