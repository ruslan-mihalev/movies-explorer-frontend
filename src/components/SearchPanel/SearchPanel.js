import React, {useCallback} from 'react';
import './SearchPanel.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchField from '../SearchFieldset/SearchFieldset';

function SearchPanel({ onSearchClicked }) {
    const submitFormHandler = useCallback(() => {
        onSearchClicked();
    }, []);

    return (
        <section className="search-panel">
            <form className='search-panel__form' name='search-form' onSubmit={submitFormHandler}>
                <SearchField/>
                <FilterCheckbox/>
            </form>
            <div className='search-panel__divider'/>
        </section>
)
    ;
}

export default SearchPanel;