import React from 'react';

import './FilterCheckbox.css';

function FilterCheckbox({ className: mixinClass }) {
    const className = `filter-checkbox ${mixinClass}`;

    return (
        <div className={className}>
            <label className='filter-checkbox__container'>
                <input className='filter-checkbox__input' type='checkbox' name='short-films-toggle'/>
                <span className='filter-checkbox__pseudo-toggle'/>
                <span className='filter-checkbox__label'>Короткометражки</span>
            </label>
        </div>
    );
}

export default FilterCheckbox;