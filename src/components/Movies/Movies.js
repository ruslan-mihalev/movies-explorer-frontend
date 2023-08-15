import React from 'react';

import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GetMoreMovies from '../GetMoreMovies/GetMoreMovies';
import SearchPanel from '../SearchPanel/SearchPanel';
import LoadingStatus from '../LoadingStatus/LoadingStatus';

function Movies({
                    isLoading,
                    moviesList,
                    onSearchQuerySubmit,
                    isShortFilmSwitchedOn,
                    onShortFilmSwitchStateChange,
                    onGetMoreMoviesClick,
                    onCardClick,
                    onActionClick
                }) {

    return (
        <main className='movies'>
            <Header isAuthorized={true}/>
            <h1 className='movies__header'>{/* HIDDEN */}Фильмы</h1>
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
                        isFavoriteCardsList={false}
                        onCardClick={onCardClick}
                        onActionClick={onActionClick}
                    />)
            }
            <GetMoreMovies
                onLoadMoreButtonClick={onGetMoreMoviesClick}
                disabled={isLoading}
            />
            <Footer/>
        </main>
    );
}

export default Movies;