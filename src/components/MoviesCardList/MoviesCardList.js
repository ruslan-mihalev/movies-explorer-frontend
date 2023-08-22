import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({moviesList, isFavoriteCardsList = false, onCardClick, onActionClick}) {
  return (
    <section className='movies-card-list'>
      <h2 className='movies-card-list__header'>{/* HIDDEN */}Список найденных фильмов</h2>
      <ol className='movies-card-list__container'>
        {
          moviesList.map((movie) => (
            <li className='movies-card-list__item' key={movie.movieId}>
              <MoviesCard
                movie={movie}
                isFavoriteListItem={isFavoriteCardsList}
                isSavedCard={!!movie._id}
                onCardClick={onCardClick}
                onActionClick={onActionClick}
              />
            </li>
          ))
        }
      </ol>
    </section>
  );
}

export default MoviesCardList;
