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
    if (submittedSearchQuery && !moviesList.length) {
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
        });
    }
  }, [submittedSearchQuery, moviesList.length, onErrorMessage]);

  useEffect(() => {
    if (moviesList.length) {
      const filteredMovies = filterMovies(moviesList, submittedSearchQuery, isShortFilmSwitchedOn);
      setSearchMoviesError(filteredMovies.length ? NO_ERROR : EMPTY_RESULT_ERROR);
      setFilteredMoviesList(filteredMovies);

      localStorage.setItem(KEY_SEARCH_QUERY, submittedSearchQuery);
      localStorage.setItem(KEY_SHORT_MOVIES_ONLY, JSON.stringify(isShortFilmSwitchedOn));
      localStorage.setItem(KEY_FILTERED_MOVIES, JSON.stringify(filteredMovies));
    }
  }, [submittedSearchQuery, isShortFilmSwitchedOn, moviesList, favoriteMovies]);

  const handleSearchSubmit = useCallback(() => {
    setSearchQuery((prev) => prev.trim());
    if (searchQuery) {
      setSubmittedSearchQuery(searchQuery);
      setPageNumber(0);
    } else {
      setSearchMoviesError(EMPTY_QUERY_ERROR);
    }
  }, [searchQuery]);

  const handleOnGetMoreMoviesClick = useCallback(() => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  }, []);

  const handleCardClick = useCallback((movie) => {
    window.open(movie.trailerLink, '_blank');
  }, []);

  const handleActionClick = useCallback((movie, isSavedCard) => {
    if (isSavedCard) {
      handleRemoveMovieFromFavorite(movie);
    } else {
      handleAddMovieToFavorite(movie);
    }
  }, [handleAddMovieToFavorite, handleRemoveMovieFromFavorite]);

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
            moviesList={zipMovies(filteredMoviesList, favoriteMovies).slice(0, moviesLimit)}
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
