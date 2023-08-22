import React from 'react';
import './LoadMoreButton.css';

function LoadMoreButton({onClick, disabled}) {
  return (
    <button className='load-more-button' onClick={onClick} disabled={disabled}>Ещё</button>
  );
}

export default LoadMoreButton;
