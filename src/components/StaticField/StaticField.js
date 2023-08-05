import React from 'react';
import './StaticField.css';

function StaticField({ labelText, value }) {
    return (
        <div className='static-field__container'>
            <span className='static-field__label'>{labelText}</span>
            <span className='static-field__value'>{value}</span>
        </div>
    );
}

export default StaticField;