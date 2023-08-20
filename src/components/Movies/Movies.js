import React, {useCallback, useEffect, useState} from 'react';

import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GetMoreMovies from '../GetMoreMovies/GetMoreMovies';
import SearchPanel from '../SearchPanel/SearchPanel';
import LoadingStatus from '../LoadingStatus/LoadingStatus';
import {getMovies} from "../../utils/MoviesApi";
import {deleteFavoriteMovie, postFavoriteMovie} from '../../utils/MainApi';
import {convertMovie} from '../../utils/MoviesUtils';

function Movies() {

    const [isMoviesLoading, setIsMoviesLoading] = useState(false);
    const [moviesList, setMoviesList] = useState([]);
    const [filteredMoviesList, setFilteredMoviesList] = useState([]);
    const [isShortFilmSwitchedOn, setShortFilmSwitchedOn] = useState(false);

    useEffect(() => {
        setIsMoviesLoading(true);
        getMovies()
            .then((movies) => {
                //console.log(`movies.length: ${movies.length}`)
                //console.log(`Converted movies: ${JSON.stringify(movies.map(convertMovie))}`)
                setMoviesList(movies.map(convertMovie));
            })
            .catch((error) => {
                //console.log(`Get movies error: ${error}`);
            })
            .finally(() => {
                setIsMoviesLoading(false);
            })
    }, []);

    const handleSearchMoviesQuerySubmit = useCallback((query) => {
        console.log(`handleSearchMoviesQuerySubmit() query: ${query}, shortFilms: ${isShortFilmSwitchedOn}`);
    }, [isShortFilmSwitchedOn]);

    const handleOnGetMoreMoviesClick = useCallback(() => {
        console.log(`handleOnGetMoreMoviesClick()`);
    }, []);

    const handleCardClick = useCallback((movie) => {
        console.log(`handleCardClick()`);
        // navigate('',)
    }, []);

    const handleActionClick = useCallback((isSavedCard) => {
        console.log(`handleActionClick() isSavedCard: ${isSavedCard}`);
    }, []);

    return (
        <main className='movies'>
            <Header/>
            <h1 className='movies__header'>{/* HIDDEN */}Фильмы</h1>
            <SearchPanel
                onSearchQuerySubmit={handleSearchMoviesQuerySubmit}
                isShortFilmSwitchedOn={isShortFilmSwitchedOn}
                onShortFilmSwitchStateChange={setShortFilmSwitchedOn}
                disabled={isMoviesLoading}
            />
            {
                (isMoviesLoading)
                    ? (<LoadingStatus/>)
                    : (<MoviesCardList
                        moviesList={moviesList}
                        isFavoriteCardsList={false}
                        onCardClick={handleCardClick}
                        onActionClick={handleActionClick}
                    />)
            }
            <GetMoreMovies
                onLoadMoreButtonClick={handleOnGetMoreMoviesClick}
                disabled={isMoviesLoading}
            />
            <Footer/>
        </main>
    );
}

export default Movies;