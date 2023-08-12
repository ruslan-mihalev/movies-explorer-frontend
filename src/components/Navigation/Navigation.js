import React, { useCallback, useState } from 'react';

import './Navigation.css';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '../../utils/hooks/useMediaQuery';

function Navigation({ className: mixinClass, isAuthorized }) {
    const className = `navigation ${mixinClass}`;
    const isDesktop = useMediaQuery('(min-width: 1024px)');
    const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

    const handleMobileMenuToggleButton = useCallback(() => {
        setIsMobileMenuOpened((prev) => !prev);
    }, []);

    const mobileMenuBackgroundClickHandler = useCallback((e) => {
        if (e.target === e.currentTarget) {
            setIsMobileMenuOpened(false);
        }
    }, []);

    const mobileMenuItemClickHandler = useCallback(() => {
        setIsMobileMenuOpened(false);
    }, []);

    const mobileMenuClass = `navigation__mobile-menu-container ${isMobileMenuOpened ? 'navigation__mobile-menu-container_active' : ''}`;

    /**
     * Сделано так сложно по причине необходимости выравнивания меню Фильмы / Сохраненные фильмы по середине шапки.
     */
    return !isAuthorized ? (
        // Not authorized
        <div className={className}>
            <nav className='navigation__account-navigation-items-container'>
                <NavLink to='/signup' className='navigation__sign-up'>Регистрация</NavLink>
                <NavLink to='/signin' className='navigation__sign-in'>Войти</NavLink>
            </nav>
        </div>
    ) : isDesktop ? (
        // Authorized & desktop style
        <div className={className}>
            <nav className='navigation__movie-navigation-items-container'>
                <NavLink className={({isActive}) => `navigation__films ${isActive ? 'navigation__films_active' : ''}`}
                         to='/movies'>Фильмы</NavLink>
                <NavLink className={({isActive}) => `navigation__films ${isActive ? 'navigation__films_active' : ''}`}
                         to='/saved-movies'>Сохранённые фильмы</NavLink>
            </nav>
            <nav className='navigation__account-navigation-items-container'>
                <NavLink to='/profile' className='navigation__account'>Аккаунт</NavLink>
            </nav>
        </div>
    ) : (
        // Authorized & mobile style
        <div className={className}>
            <div className='navigation__mobile-open-menu-button' onClick={handleMobileMenuToggleButton}/>
            <div className={mobileMenuClass} onClick={mobileMenuBackgroundClickHandler}>
                <div className='navigation__mobile-menu'>
                    <div className='navigation__mobile-close-menu-button' onClick={handleMobileMenuToggleButton}/>
                    <nav className='navigation__movie-navigation-items-container'>
                        <NavLink
                            className={({isActive}) => `navigation__films ${isActive ? 'navigation__films_active' : ''}`}
                            to='/'
                            onClick={mobileMenuItemClickHandler}>Главная</NavLink>
                        <NavLink
                            className={({isActive}) => `navigation__films ${isActive ? 'navigation__films_active' : ''}`}
                            to='/movies'
                            onClick={mobileMenuItemClickHandler}>Фильмы</NavLink>
                        <NavLink
                            className={({isActive}) => `navigation__films ${isActive ? 'navigation__films_active' : ''}`}
                            to='/saved-movies'
                            onClick={mobileMenuItemClickHandler}>Сохранённые фильмы</NavLink>
                    </nav>
                    <nav className='navigation__account-navigation-items-container'>
                        <NavLink className='navigation__account'
                                 to='/profile'
                                 onClick={mobileMenuItemClickHandler}>Аккаунт</NavLink>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navigation;