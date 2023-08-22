import React from 'react';
import './SubmitButton.css';

function SubmitButton({className: mixinClass, text, onClick, type, disabled}) {
  const className = `submit-button ${mixinClass}`;
  return (<button className={className} disabled={disabled} type={type} onClick={onClick}>{text}</button>);
}

export default SubmitButton;
