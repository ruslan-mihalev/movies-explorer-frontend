import React from 'react';

import './NavTab.css';
import {Link} from "react-router-dom";

function NavTab() {
    return (
        <section className='nav-tab'>
            <ul className='nav-tab__container'>
                <li className='nav-tab__link-wrapper'>
                    <Link to='#about-project' className='nav-tab__link'>О проекте</Link>
                </li>
                <li>
                    <Link to='#techs' className='nav-tab__link'>Технологии</Link>
                </li>
                <li>
                    <Link to='#about-me' className='nav-tab__link'>Студент</Link>
                </li>
            </ul>
        </section>
    );
}

export default NavTab;