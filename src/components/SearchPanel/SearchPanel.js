import React, {useCallback, useState} from 'react';
import './SearchPanel.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchField from '../SearchFieldset/SearchFieldset';

function SearchPanel({
                         onSearchQuerySubmit,
                         isShortFilmSwitchedOn,
                         onShortFilmSwitchStateChange,
                         disabled
                     }) {

    const [searchQuery, setSearchQuery] = useState('');

    const submitFormHandler = useCallback((e) => {
        e.preventDefault();
        onSearchQuerySubmit(searchQuery);
    }, [searchQuery, onSearchQuerySubmit]);

    const searchQueryTextChangeHandler = useCallback((text) => {
        setSearchQuery(text);
    }, []);

    return (
        <section className="search-panel">
            <h2 className='search-panel__header'>{/* HIDDEN */}Поиск по фильмам</h2>
            <form className='search-panel__form' name='search-form' onSubmit={submitFormHandler} noValidate={true}>
                <SearchField
                    queryText={searchQuery}
                    onQueryTextChange={searchQueryTextChangeHandler}
                    disabled={disabled}
                />
                <FilterCheckbox
                    className='search-panel__filter-checkbox'
                    isSwitchedOn={isShortFilmSwitchedOn}
                    onSwitchStatChange={onShortFilmSwitchStateChange}
                    disabled={disabled}
                />
            </form>
            <div className='search-panel__divider'/>
        </section>
    );
}

export default SearchPanel;