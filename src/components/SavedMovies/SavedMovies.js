import React from 'react';

import './SavedMovies.css';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";

function SavedMovies() {
    return (
        <main className="saved-movies">
            <Header/>
            <SearchForm/>
            <MoviesCardList>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
            </MoviesCardList>
            <Footer/>
        </main>
    );
}

export default SavedMovies;