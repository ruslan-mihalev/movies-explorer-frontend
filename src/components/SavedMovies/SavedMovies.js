import React, {useCallback, useEffect, useState} from 'react';

import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesDivider from '../MoviesDivider/MoviesDivider';
import SearchPanel from '../SearchPanel/SearchPanel';
import LoadingStatus from '../LoadingStatus/LoadingStatus';
import {deleteFavoriteMovie, postFavoriteMovie, getFavoriteMovies} from '../../utils/MainApi';
import {convertMovie} from '../../utils/MoviesUtils';

function SavedMovies() {

    const [isLoading, setIsLoading] = useState(false);
    const [moviesList, setMoviesList] = useState([]);
    const [filteredMoviesList, setFilteredMoviesList] = useState([]);
    const [isShortFilmSwitchedOn, setShortFilmSwitchedOn] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getFavoriteMovies()
            .then((favoriteMovies) => {
            })
            .catch(() => {
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const handleSearchQuerySubmit = useCallback((query) => {
        console.log(`handleSearchQuerySubmit() query: ${query}, shortFilms: ${isShortFilmSwitchedOn}`);
    }, [isShortFilmSwitchedOn]);

    const handleCardClick = useCallback((movie) => {
        console.log(`handleCardClick()`);
        // navigate('',)
    }, []);

    const handleActionClick = useCallback((isSavedCard) => {
        console.log(`handleActionClick() isSavedCard: ${isSavedCard}`);
    }, []);

    return (
        <main className='saved-movies'>
            <Header/>
            <h1 className='saved-movies__header'>{/* HIDDEN */}Сохраненные фильмы</h1>
            <SearchPanel
                onSearchQuerySubmit={handleSearchQuerySubmit}
                isShortFilmSwitchedOn={isShortFilmSwitchedOn}
                onShortFilmSwitchStateChange={setShortFilmSwitchedOn}
                disabled={isLoading}
            />
            {
                (isLoading)
                    ? (<LoadingStatus/>)
                    : (<MoviesCardList
                        moviesList={moviesList}
                        isFavoriteCardsList={true}
                        onCardClick={handleCardClick}
                        onActionClick={handleActionClick}
                    />)
            }

            <MoviesDivider/>
            <Footer/>
        </main>
    );
}

export default SavedMovies;