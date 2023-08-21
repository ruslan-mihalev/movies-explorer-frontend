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
import {convertMovie, filterMovies, zipMovies} from '../../utils/MoviesUtils';
import {usePagination} from '../../utils/hooks/usePagination';
import {useFavoriteMovies} from "../../contexts/FavoriteMoviesContext";
import {KEY_FILTERED_MOVIES, KEY_SEARCH_QUERY, KEY_SHORT_MOVIES_ONLY} from "../../utils/constants";

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
    const {favoriteMovies} = useFavoriteMovies();

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
        if (localStorage.getItem(KEY_SEARCH_QUERY)) {
            setSearchQuery(localStorage.getItem(KEY_SEARCH_QUERY));
        }
        if (localStorage.getItem(KEY_SHORT_MOVIES_ONLY)) {
            setShortFilmSwitchedOn(JSON.parse(localStorage.getItem(KEY_SHORT_MOVIES_ONLY)));
        }
        if (localStorage.getItem(KEY_FILTERED_MOVIES)) {
            setFilteredMoviesList(JSON.parse(localStorage.getItem(KEY_FILTERED_MOVIES)));
        }
    }, []);

    useEffect(() => {
        console.log(`useEffect() searchQuery: ${submittedSearchQuery}`);
        console.log(`useEffect() moviesList.length: ${moviesList.length}`);
        if (submittedSearchQuery && !moviesList.length) {
            requestMovies();
        }
    }, [submittedSearchQuery, moviesList.length]);

    useEffect(() => {
        console.log(`>>> favoriteMovies.length: ${favoriteMovies.length}`);
        console.log(`>>> isShortFilmSwitchedOn: ${isShortFilmSwitchedOn}`);
        console.log(`>>> searchQuery: ${searchQuery}`);
        if (moviesList.length) {
            const filteredMovies = filterMovies(moviesList, submittedSearchQuery, isShortFilmSwitchedOn);
            const extendedFilteredMovies = zipMovies(filteredMovies, favoriteMovies);
            setSearchMoviesError(extendedFilteredMovies.length ? NO_ERROR : EMPTY_RESULT_ERROR);
            setFilteredMoviesList(extendedFilteredMovies);

            localStorage.setItem(KEY_SEARCH_QUERY, searchQuery);
            localStorage.setItem(KEY_SHORT_MOVIES_ONLY, JSON.stringify(isShortFilmSwitchedOn));
            localStorage.setItem(KEY_FILTERED_MOVIES, JSON.stringify(extendedFilteredMovies));
        }
    }, [submittedSearchQuery, isShortFilmSwitchedOn, moviesList, favoriteMovies]);

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
            handleRemoveMovieFromFavorite(movie);
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