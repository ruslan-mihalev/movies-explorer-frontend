import React from 'react';

import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className='footer__title-container'>
                <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            </div>
            <div className='footer__content'>
                <p className='footer__copyright'>©2020</p>
                <ul className='footer__menu'>
                    <li className='footer__menu-item'>
                        <Link className='footer__menu-link' to='https://practicum.yandex.ru/'
                              target='_blank'>Яндекс.Практикум</Link>
                    </li>
                    <li className='footer__menu-item'>
                        <Link className='footer__menu-link' to='https://github.com/ruslan-mihalev'
                              target='_blank'>Github</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;