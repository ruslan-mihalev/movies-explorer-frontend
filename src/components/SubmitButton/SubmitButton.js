import React from 'react';
import './SubmitButton.css';

function SubmitButton({ text, onClick, style, disabled }) {
    const className = `submit-button ${ style === 'accent' ? 'submit-button_style_accent' : ''}`;
    return (<button className={className} disabled={disabled} onClick={onClick}>{text}</button>);
}

export default SubmitButton;