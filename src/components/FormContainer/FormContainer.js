import React from 'react';
import './FormContainer.css';

function FormContainer({ children }) {
    return (
        <div className='form-container'>{children}</div>
    );
}

export default FormContainer;