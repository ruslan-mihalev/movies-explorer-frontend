import React from 'react';
import './SubmitButton.css';

function SubmitButton({ text, onClick, buttonStyle, type, disabled }) {
    const className = `submit-button ${ buttonStyle === 'accent' ? 'submit-button_style_accent' : ''}`;
    return (<button className={className} disabled={disabled} type={type} onClick={onClick}>{text}</button>);
}

export default SubmitButton;