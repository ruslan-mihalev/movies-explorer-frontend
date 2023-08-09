import React from 'react';

import './SavedMovies.css';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesDivider from "../MoviesDivider/MoviesDivider";
import SearchPanel from "../SearchPanel/SearchPanel";

function SavedMovies() {
    return (
        <main className="saved-movies">
            <Header/>
            <SearchPanel onSearchClicked={() => {}}/>
            <MoviesCardList>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
            </MoviesCardList>
            <MoviesDivider/>
            <Footer/>
        </main>
    );
}

export default SavedMovies;