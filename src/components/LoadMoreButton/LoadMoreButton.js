import React from 'react';
import './LoadMoreButton.css';

function LoadMoreButton({onClick}) {
    return(
        <button className='load-more-button' onClick={onClick}>Ещё</button>
    );
}

export default LoadMoreButton;