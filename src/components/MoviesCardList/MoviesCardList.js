import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({moviesList, isFavoriteCardsList, onCardClick, onActionClick}) {
    return (
        <section className='movies-card-list'>
            <h2 className='movies-card-list__header'>{/* HIDDEN */}Список найденных фильмов</h2>
            <ol className='movies-card-list__container'>
                {
                    moviesList.map((card) => (
                        <li className='movies-card-list__item' key={card.key}>
                            <MoviesCard
                                name={card.name}
                                duration={card.duration}
                                imgUrl={card.imgUrl}
                                isFavoriteListItem={isFavoriteCardsList}
                                isSavedCard={card.isSavedCard}
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