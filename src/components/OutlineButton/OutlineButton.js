import React from 'react';
import './OutlineButton.css';

function OutlineButton({ className: mixinClass, text, onClick }) {
    const className = `outline-button ${mixinClass}`;
    return (<button className={className} onClick={onClick}>{text}</button>);
}

export default OutlineButton;