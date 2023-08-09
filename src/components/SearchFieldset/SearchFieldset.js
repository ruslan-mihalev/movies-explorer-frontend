import React from 'react';

import './SearchFieldset.css';

function SearchField() {
    return (
        <div className='search-fieldset'>
            <input className='search-fieldset__input' placeholder='Фильм' type='text' name='search-query' required={true} />
            <button className='search-fieldset__button' type='submit'/>
        </div>
    );
}

export default SearchField;