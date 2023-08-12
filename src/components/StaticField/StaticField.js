import React from 'react';
import './StaticField.css';

function StaticField({ className: mixinName, labelText, value }) {
    const className = `static-field ${mixinName}`;
    return (
        <div className={className}>
            <span className='static-field__label'>{labelText}</span>
            <span className='static-field__value'>{value}</span>
        </div>
    );
}

export default StaticField;