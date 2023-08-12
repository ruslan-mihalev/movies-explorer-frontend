import React, { useCallback, useState } from 'react';
import './SearchPanel.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchField from '../SearchFieldset/SearchFieldset';

function SearchPanel({ onSearchQuerySubmit }) {

    const [queryText, setQueryText] = useState('');

    const submitFormHandler = useCallback((e) => {
        e.preventDefault();
        onSearchQuerySubmit(queryText);
    }, [onSearchQuerySubmit]);

    const searchQueryTextChangeHandler = useCallback((text) => {
        setQueryText(text);
    }, [setQueryText]);

    return (
        <section className="search-panel">
            <form className='search-panel__form' name='search-form' onSubmit={submitFormHandler}>
                <SearchField queryText={queryText} onQueryTextChanged={searchQueryTextChangeHandler}/>
                <FilterCheckbox className='search-panel__filter-checkbox'/>
            </form>
            <div className='search-panel__divider'/>
        </section>
    );
}

export default SearchPanel;