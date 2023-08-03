import React, { useCallback } from 'react';

import './NotFound.css';
import {useNavigate} from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    const handleBackNavigation = useCallback(() => {
        navigate(-1);
    }, []);

    return (
        <section className='not-found'>
            <div className='not-found__container'>
                <div/>
                <div>
                    <h1 className='not-found__title'>404</h1>
                    <p className='not-found__subtitle'>Страница не найдена</p>
                </div>
                <button className='not-found__back-button' onClick={handleBackNavigation}>Назад</button>
            </div>
        </section>
    );
}

export default NotFound;