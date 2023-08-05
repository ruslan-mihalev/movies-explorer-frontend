import React from 'react';
import './SubmitButton.css';

function SubmitButton({ text, onClick, style, disabled }) {
    return (<button className='submit-button' disabled={disabled} onClick={onClick}>{text}</button>);
}

export default SubmitButton;