import React from 'react';
import './OutlineButton.css';

function OutlineButton({className: mixinClass, text, disabled, onClick}) {
  const className = `outline-button ${mixinClass}`;
  return (<button className={className} onClick={onClick} disabled={disabled}>{text}</button>);
}

export default OutlineButton;
