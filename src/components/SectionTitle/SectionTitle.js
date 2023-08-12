import React from 'react';
import './SectionTitle.css';

function SectionTitle({ className: mixinClass, children }) {
    const className = `section-title ${mixinClass}`;
    return (
        <div className={className}>
            <h2 className='section-title__text'>
                {children}
            </h2>
        </div>
    );
}

export default SectionTitle;