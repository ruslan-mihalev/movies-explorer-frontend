import React from 'react';

import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesDivider from '../MoviesDivider/MoviesDivider';
import SearchPanel from '../SearchPanel/SearchPanel';
import LoadingStatus from '../LoadingStatus/LoadingStatus';

function SavedMovies({
                         isLoading,
                         moviesList,
                         onSearchQuerySubmit,
                         isShortFilmSwitchedOn,
                         onShortFilmSwitchStateChange,
                         onCardClick,
                         onActionClick
                     }) {

    return (
        <main className='saved-movies'>
            <Header/>
            <h1 className='saved-movies__header'>{/* HIDDEN */}Сохраненные фильмы</h1>
            <SearchPanel
                onSearchQuerySubmit={onSearchQuerySubmit}
                isShortFilmSwitchedOn={isShortFilmSwitchedOn}
                onShortFilmSwitchStateChange={onShortFilmSwitchStateChange}
                disabled={isLoading}
            />
            {
                (isLoading)
                    ? (<LoadingStatus/>)
                    : (<MoviesCardList
                        moviesList={moviesList}
                        isFavoriteCardsList={true}
                        onCardClick={onCardClick}
                        onActionClick={onActionClick}
                    />)
            }

            <MoviesDivider/>
            <Footer/>
        </main>
    );
}

export default SavedMovies;