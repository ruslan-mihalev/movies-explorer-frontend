import React from 'react';
import './SimpleText.css';

function SimpleText({ mixinClass, children }) {
    const className = `simple-text ${mixinClass}`;
    return (
        <p className={className}>{children}</p>
    );
}

export default SimpleText;