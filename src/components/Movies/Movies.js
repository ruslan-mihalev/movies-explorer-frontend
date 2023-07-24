import React from 'react';

import './Movies.css';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";

function Movies() {
    return (
        <div className="movies">
            <SearchForm/>
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

export default Movies;