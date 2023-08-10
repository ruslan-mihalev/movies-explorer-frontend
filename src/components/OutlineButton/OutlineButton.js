import React from 'react';
import './OutlineButton.css';

function OutlineButton({ text, onClick, style }) {
    const className = `outline-button ${style === 'danger' ? 'outline-button_style_danger' : ''}`;
    return (<button className={className} onClick={onClick}>{text}</button>);
}

export default OutlineButton;