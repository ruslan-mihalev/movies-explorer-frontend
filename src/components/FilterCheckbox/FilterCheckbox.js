import React, {useCallback} from 'react';

import './FilterCheckbox.css';

function FilterCheckbox({className: mixinClass, isSwitchedOn, onSwitchStatChange, disabled}) {
  const className = `filter-checkbox ${mixinClass}`;

  const handleValueChange = useCallback((e) => {
    onSwitchStatChange(e.target.checked);
  }, [onSwitchStatChange]);

  return (
    <div className={className}>
      <label className='filter-checkbox__container'>
        <input
          className='filter-checkbox__input'
          type='checkbox'
          name='short-films-toggle'
          checked={isSwitchedOn}
          onChange={handleValueChange}
          disabled={disabled}
        />
        <span className='filter-checkbox__pseudo-toggle'/>
        <span className='filter-checkbox__label'>Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
