import React, { useCallback, useState } from 'react';
import './SearchPanel.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchField from '../SearchFieldset/SearchFieldset';

function SearchPanel({ onSearchQuerySubmit }) {

    const [searchQuery, setSearchQuery] = useState('');

    const submitFormHandler = useCallback((e) => {
        e.preventDefault();
        onSearchQuerySubmit(searchQuery);
    }, [searchQuery, onSearchQuerySubmit]);

    const searchQueryTextChangeHandler = useCallback((text) => {
        setSearchQuery((prev) => {
            return text;
        });
    }, [searchQuery]);

    return (
        <section className="search-panel">
            <form className='search-panel__form' name='search-form' onSubmit={submitFormHandler}>
                <SearchField queryText={searchQuery} onQueryTextChanged={searchQueryTextChangeHandler}/>
                <FilterCheckbox className='search-panel__filter-checkbox'/>
            </form>
            <div className='search-panel__divider'/>
        </section>
    );
}

export default SearchPanel;