import React from 'react';

import './SavedMovies.css';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";

function SavedMovies() {
    return (
        <div className="saved-movies">
            <MoviesCardList>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
            </MoviesCardList>
        </div>
    );
}

export default SavedMovies;