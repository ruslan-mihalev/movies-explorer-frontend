import React from 'react';

import './Promo.css';

function Promo({ children }) {
    return (
        <section className='promo'>
            {children}
            <div className='promo__hero'>
                <p className='promo__text'>Учебный проект студента факультета Веб-разработки.</p>
            </div>
        </section>
    );
}

export default Promo;