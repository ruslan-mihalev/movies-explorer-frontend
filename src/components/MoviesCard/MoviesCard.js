import React, {useCallback} from 'react';

import './MoviesCard.css';

function createActionButtonModifier(isFavoriteListItem, isCardAddedToFavorite) {
    if (isFavoriteListItem) {
        if (isCardAddedToFavorite) {
            return 'movies-card__action_type_remove';
        } else {
            return '';
        }
    } else {
        if (isCardAddedToFavorite) {
            return 'movies-card__action_type_saved';
        } else {
            return 'movies-card__action_type_default';
        }
    }
}

function MoviesCard({name, duration, imgUrl, isFavoriteListItem, isSavedCard = false, onCardClick, onActionClick}) {

    const actionModifier = createActionButtonModifier(isFavoriteListItem, isSavedCard);
    const actionClass = `movies-card__action ${actionModifier}`;

    const handleActionClickHandler = useCallback(() => {
        onActionClick(isSavedCard);
    }, [onActionClick]);

    return (
        <article className='movies-card'>
            <div className='movies-card__image-container' onClick={onCardClick}>
                <img className='movies-card__image' alt={name} src={imgUrl}/>
            </div>
            <div className='movies-card__name-container'>
                <div className='movies-card__name-action-container'>
                    <h3 className='movies-card__name'>{name}</h3>
                    <button className={actionClass} onClick={handleActionClickHandler}/>
                </div>
                <p className='movies-card__duration'>{duration}</p>
            </div>
        </article>
    );
}

export default MoviesCard;