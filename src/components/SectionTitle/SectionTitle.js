import React from 'react';
import './SectionTitle.css';

function SectionTitle({ children }) {
    return (
        <div className='section-title'>
            <h2 className='section-title__text'>
                {children}
            </h2>
        </div>
    );
}

export default SectionTitle;