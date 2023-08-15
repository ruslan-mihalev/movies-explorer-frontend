import React from 'react';
import './GetMoreMovies.css';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';

function GetMoreMovies({onLoadMoreButtonClick, disabled}) {
    return (
        <div className='get-more-movies'>
            <LoadMoreButton onClick={onLoadMoreButtonClick} disabled={disabled}/>
        </div>
    );
}

export default GetMoreMovies;