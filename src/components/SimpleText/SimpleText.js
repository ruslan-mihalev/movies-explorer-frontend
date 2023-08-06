import React from 'react';
import './SimpleText.css';

function SimpleText({ children }) {
    return (
        <p className='simple-text'>{children}</p>
    );
}

export default SimpleText;