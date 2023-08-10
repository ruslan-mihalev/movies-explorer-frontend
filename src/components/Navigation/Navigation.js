import React, {useCallback, useEffect, useState} from 'react';

import './Navigation.css';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '../../utils/hooks/useMediaQuery';

function Navigation({isAuthorized = false}) {
    const isDesktop = useMediaQuery('(min-width: 1024px)');
    const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

    const handleMobileMenuToggleButton = useCallback(() => {
        setIsMobileMenuOpened((prev) => !prev);
    }, []);

    const mobileMenuClass = `navigation__mobile-style-container ${isMobileMenuOpened ? 'navigation__mobile-style-container_active' : ''}`;

    /**
     * Сделано так сложно по причине необходимости выравнивания меню Фильмы / Сохраненные фильмы по середине шапки.
     */
    return !isAuthorized ? (
        // Not authorized
        <nav className='navigation__account-navigation-items-container'>
            <NavLink to='/signup' className='navigation__sign-up'>Регистрация</NavLink>
            <NavLink to='/signin' className='navigation__sign-in'>Войти</NavLink>
        </nav>
    ) : isDesktop ? (
        // Authorized & desktop style
        <>
            <nav className='navigation__movie-navigation-items-container'>
                <NavLink to='/movies' className='navigation__films navigation__films_selected'>Фильмы</NavLink>
                <NavLink to='/saved-movies' className='navigation__films'>Сохранённые фильмы</NavLink>
            </nav>
            <nav className='navigation__account-navigation-items-container'>
                <NavLink to='/profile' className='navigation__account'>Аккаунт</NavLink>
            </nav>
        </>
    ) : (
        // Authorized & mobile style
        <div>
            <div className='navigation__mobile-open-menu-button' onClick={handleMobileMenuToggleButton}/>
            <div className={mobileMenuClass}>
                <div className='navigation__mobile-close-menu-button' onClick={handleMobileMenuToggleButton}/>
                <nav className='navigation__movie-navigation-items-container'>
                    <NavLink to='/'
                             className={({isActive}) => `navigation__films ${isActive ? 'navigation__films_selected' : ''}`}>Главная</NavLink>
                    <NavLink to='/movies'
                             className={({isActive}) => `navigation__films ${isActive ? 'navigation__films_selected' : ''}`}>Фильмы</NavLink>
                    <NavLink to='/saved-movies'
                             className={({isActive}) => `navigation__films ${isActive ? 'navigation__films_selected' : ''}`}>Сохранённые
                        фильмы</NavLink>
                </nav>
                <nav className='navigation__account-navigation-items-container'>
                    <NavLink to='/profile' className='navigation__account'>Аккаунт</NavLink>
                </nav>
            </div>
        </div>
    );
}

export default Navigation;