import React, {useCallback, useEffect, useState} from 'react';

import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GetMoreMovies from '../GetMoreMovies/GetMoreMovies';
import SearchPanel from '../SearchPanel/SearchPanel';
import LoadingStatus from '../LoadingStatus/LoadingStatus';
import {getMovies} from '../../utils/MoviesApi';
import {StatusCodes} from 'http-status-codes';
import {
    BAD_REQUEST_ERROR_MESSAGE,
    EMPTY_QUERY_ERROR, EMPTY_RESULT_ERROR,
    GET_MOVIES_ERROR_MESSAGE,
    INTERNAL_SERVER_ERROR_MESSAGE, NO_ERROR,
} from '../../utils/errorMessages';
import {convertMovie, filterMovies} from '../../utils/MoviesUtils';
import {usePagination} from '../../utils/hooks/usePagination';

function Movies({handleAddMovieToFavorite, handleRemoveMovieFromFavorite, onErrorMessage}) {

    const [isMoviesLoading, setIsMoviesLoading] = useState(false);
    const [moviesList, setMoviesList] = useState([]);
    const [filteredMoviesList, setFilteredMoviesList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [submittedSearchQuery, setSubmittedSearchQuery] = useState('');
    const [isShortFilmSwitchedOn, setShortFilmSwitchedOn] = useState(false);
    const [searchMoviesError, setSearchMoviesError] = useState(NO_ERROR);
    const [pageNumber, setPageNumber] = useState(0);
    const [initialPageSize, regularPageSize] = usePagination();

    const requestMovies = () => {
        console.log(`requestMovies()`);
        setIsMoviesLoading(true);
        getMovies()
            .then((movies) => {
                setMoviesList(movies.map(convertMovie));
            })
            .catch((error) => {
                if (error.statusCode === StatusCodes.BAD_REQUEST) {
                    onErrorMessage(BAD_REQUEST_ERROR_MESSAGE);
                } else if (error.statusCode === StatusCodes.INTERNAL_SERVER_ERROR) {
                    onErrorMessage(INTERNAL_SERVER_ERROR_MESSAGE);
                } else {
                    onErrorMessage(GET_MOVIES_ERROR_MESSAGE);
                }
            })
            .finally(() => {
                setIsMoviesLoading(false);
            })
    };

    useEffect(() => {
        console.log(`useEffect() searchQuery: ${submittedSearchQuery}`);
        console.log(`useEffect() moviesList.length: ${moviesList.length}`);
        if (submittedSearchQuery && !moviesList.length) {
            requestMovies();
        }
    }, [submittedSearchQuery, moviesList.length]);

    useEffect(() => {
        console.log(`moviesList.length: ${moviesList.length}`);
        if (moviesList.length) {
            const filteredMovies = filterMovies(moviesList, submittedSearchQuery, isShortFilmSwitchedOn);
            setSearchMoviesError(filteredMovies.length ? NO_ERROR : EMPTY_RESULT_ERROR);
            setFilteredMoviesList(filteredMovies);
        }
    }, [submittedSearchQuery, isShortFilmSwitchedOn, moviesList.length]);

    const handleSearchSubmit = useCallback(() => {
        console.log(`handleSearchSubmit() query: ${searchQuery}`);
        setSearchQuery((prev) => prev.trim());
        if (searchQuery) {
            setSubmittedSearchQuery(searchQuery);
            setPageNumber(0);
        } else {
            setSearchMoviesError(EMPTY_QUERY_ERROR);
        }
    }, [searchQuery]);

    const handleOnGetMoreMoviesClick = useCallback(() => {
        console.log(`handleOnGetMoreMoviesClick()`);
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }, []);

    const handleCardClick = useCallback((movie) => {
        console.log(`handleCardClick() movie: ${JSON.stringify(movie)}`);
        window.open(movie.trailerLink, '_blank');
    }, []);

    const handleActionClick = useCallback((movie, isSavedCard) => {
        console.log(`handleActionClick() isSavedCard: ${isSavedCard}, movie: ${JSON.stringify(movie)}`);
        if (isSavedCard) {
            handleRemoveMovieFromFavorite(movie.movieId);
        } else {
            handleAddMovieToFavorite(movie);
        }
    }, []);

    const moviesLimit = initialPageSize + pageNumber * regularPageSize;

    return (
        <main className='movies'>
            <Header/>
            <h1 className='movies__header'>{/* HIDDEN */}Фильмы</h1>
            <SearchPanel
                searchQuery={searchQuery}
                onSearchQueryChange={setSearchQuery}
                onSearchSubmit={handleSearchSubmit}
                isShortFilmSwitchedOn={isShortFilmSwitchedOn}
                onShortFilmSwitchStateChange={setShortFilmSwitchedOn}
                disabled={isMoviesLoading}
            />
            {
                (isMoviesLoading || searchMoviesError)
                    ? (<LoadingStatus errorMessage={searchMoviesError}/>)
                    : (<MoviesCardList
                        moviesList={filteredMoviesList.slice(0, moviesLimit)}
                        isFavoriteCardsList={false}
                        onCardClick={handleCardClick}
                        onActionClick={handleActionClick}
                    />)
            }
            {(!searchMoviesError && moviesLimit < filteredMoviesList.length)
                ? (<GetMoreMovies
                    onLoadMoreButtonClick={handleOnGetMoreMoviesClick}
                    disabled={isMoviesLoading}/>)
                : null}
            <Footer/>
        </main>
    );
}

export default Movies;