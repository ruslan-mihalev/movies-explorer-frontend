import React, { useCallback } from 'react';

import './NotFound.css';
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    const handleBackNavigation = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    return (
        <main className='not-found'>
            <section className='not-found__container'>
                <div className='not-found__title-container'/>
                <div className='not-fount__main-container'>
                    <h1 className='not-found__title'>404</h1>
                    <p className='not-found__subtitle'>Страница не найдена</p>
                </div>
                <div className='not-found__buttons-container'>
                    <button className='not-found__back-button' onClick={handleBackNavigation}>Назад</button>
                </div>
            </section>
        </main>
    );
}

export default NotFound;