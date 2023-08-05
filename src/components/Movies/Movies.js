import React from 'react';

import './Movies.css';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Movies() {
    return (
        <main className="movies">
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

export default Movies;