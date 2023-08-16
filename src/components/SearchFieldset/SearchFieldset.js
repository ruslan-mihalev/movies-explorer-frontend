import React, {useCallback} from 'react';

import './SearchFieldset.css';

function SearchField({queryText, onQueryTextChange, disabled}) {

    const queryTextChangeHandler = useCallback((e) => {
        onQueryTextChange(e.target.value);
    }, [onQueryTextChange]);

    return (
        <div className='search-fieldset'>
            <input
                className='search-fieldset__input'
                name='query'
                id='search-query'
                type='text'
                placeholder='Фильм'
                value={queryText}
                onChange={queryTextChangeHandler}
                disabled={disabled}
                required={true}
            />
            <button
                className='search-fieldset__button'
                type='submit'
                disabled={disabled}
            />
        </div>
    );
}

export default SearchField;