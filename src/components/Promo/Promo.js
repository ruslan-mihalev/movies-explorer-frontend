import React from 'react';

import './Promo.css';

function Promo({ children }) {
    return (
        <section className='promo'>
            {children}
            <div className='promo__hero'>
                <h1 className='promo__text'>Учебный проект студента факультета Веб-разработки.</h1>
            </div>
        </section>
    );
}

export default Promo;