import React from 'react';
import './GetMoreMovies.css';
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";

function GetMoreMovies({onLoadMoreButtonClick}) {
    return (
        <div className='get-more-movies'>
            <LoadMoreButton onClick={onLoadMoreButtonClick}/>
        </div>
    );
}

export default GetMoreMovies;