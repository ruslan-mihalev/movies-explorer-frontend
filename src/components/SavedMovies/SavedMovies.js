import React, {useCallback, useEffect, useState} from 'react';

import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesDivider from '../MoviesDivider/MoviesDivider';
import SearchPanel from '../SearchPanel/SearchPanel';
import LoadingStatus from '../LoadingStatus/LoadingStatus';
import {
  EMPTY_QUERY_ERROR,
  EMPTY_RESULT_ERROR,
  NO_ERROR
} from '../../utils/errorMessages';
import {filterMovies} from '../../utils/MoviesUtils';
import {useFavoriteMovies} from '../../contexts/FavoriteMoviesContext';

function SavedMovies({handleRemoveMovieFromFavorite}) {

  const [filteredMoviesList, setFilteredMoviesList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedSearchQuery, setSubmittedSearchQuery] = useState('');
  const [isShortFilmSwitchedOn, setShortFilmSwitchedOn] = useState(false);
  const [searchMoviesError, setSearchMoviesError] = useState(NO_ERROR);
  const {favoriteMovies} = useFavoriteMovies();

  useEffect(() => {
    if (favoriteMovies) {
      const filteredMovies = filterMovies(favoriteMovies, submittedSearchQuery, isShortFilmSwitchedOn);
      setSearchMoviesError(filteredMovies.length ? NO_ERROR : EMPTY_RESULT_ERROR);
      setFilteredMoviesList(filteredMovies);
    }
  }, [submittedSearchQuery, isShortFilmSwitchedOn, favoriteMovies]);

  const handleSearchSubmit = useCallback(() => {
    setSearchQuery((prev) => prev.trim());

    if (searchQuery) {
      setSubmittedSearchQuery(searchQuery);
    } else {
      setSearchMoviesError(EMPTY_QUERY_ERROR);
    }
  }, [searchQuery]);

  const handleCardClick = useCallback((movie) => {
    window.open(movie.trailerLink, '_blank');
  }, []);

  const handleActionClick = useCallback((movie) => {
    handleRemoveMovieFromFavorite(movie);
  }, [handleRemoveMovieFromFavorite]);

  return (
    <main className='saved-movies'>
      <Header/>
      <h1 className='saved-movies__header'>{/* HIDDEN */}Сохраненные фильмы</h1>
      <SearchPanel
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
        isShortFilmSwitchedOn={isShortFilmSwitchedOn}
        onShortFilmSwitchStateChange={setShortFilmSwitchedOn}
      />
      {
        (searchMoviesError)
          ? (<LoadingStatus errorMessage={searchMoviesError}/>)
          : (<MoviesCardList
            moviesList={filteredMoviesList}
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
