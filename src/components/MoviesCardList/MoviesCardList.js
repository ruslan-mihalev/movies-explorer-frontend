import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ moviesList }) {
    return (
        <section className='movies-card-list'>
            <li className='movies-card-list__container'>
                {
                    moviesList.map((card) => (
                        <ul className='movies-card-list__item' key={card.name}>
                            <MoviesCard
                                name={card.name}
                                duration={card.duration}
                                imgUrl={card.imgUrl}
                                actionType={card.actionType}
                            />
                        </ul>
                    ))
                }
            </li>
        </section>
    );
}

export default MoviesCardList;