import React, { useCallback } from 'react';

import './SearchFieldset.css';

function SearchField({ queryText, onQueryTextChanged }) {

    const searchQueryTextChangeHandler = useCallback((e) => {
        onQueryTextChanged(e.target.value);
    }, [onQueryTextChanged]);

    return (
        <div className='search-fieldset'>
            <input className='search-fieldset__input'
                   name='query' id='search-query'
                   type='text' required={true} placeholder='Фильм'
                   value={queryText} onChange={searchQueryTextChangeHandler}/>
            <button className='search-fieldset__button' type='submit'/>
        </div>
    );
}

export default SearchField;