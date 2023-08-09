import React from 'react';
import './GetMoreMovies.css';
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";

function GetMoreMovies({onLoadMoreButtonClick}) {
    return (
        <section className='get-more-movies'>
            <LoadMoreButton onClick={onLoadMoreButtonClick}/>
        </section>
    );
}

export default GetMoreMovies;