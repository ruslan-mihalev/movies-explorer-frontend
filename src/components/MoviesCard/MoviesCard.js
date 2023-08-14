import React from 'react';

import './MoviesCard.css';

function MoviesCard({ name, duration, imgUrl, actionType, onCardClick, onActionClick }) {

    const actionModifier = actionType === 'remove' ? 'movies-card__action_type_remove' : (actionType === 'saved' ? 'movies-card__action_type_saved' : 'movies-card__action_type_default');
    const actionClass = `movies-card__action ${actionModifier}`;

    return (
        <article className='movies-card'>
            <div className='movies-card__image-container' onClick={onCardClick}>
                <img className='movies-card__image' alt={name} src={imgUrl}/>
            </div>
            <div className='movies-card__name-container'>
                <div className='movies-card__name-action-container'>
                    <h3 className='movies-card__name'>{name}</h3>
                    <button className={actionClass} onClick={onActionClick}/>
                </div>
                <p className='movies-card__duration'>{duration}</p>
            </div>
        </article>
    );
}

export default MoviesCard;