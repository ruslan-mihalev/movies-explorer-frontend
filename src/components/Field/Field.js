import React from 'react';

import './Field.css';

function Field({
                   labelText,
                   required,
                   inputName,
                   type,
                   placeHolder,
                   minLength = null,
                   maxLength = null,
                   value,
                   onChange,
                   errorText
               }) {

    const inputClassName = `field-input ${ errorText ? 'field-input_errored' : ''}`;
    return (
        <>
            <label className='field-label'>{labelText}</label>
            <input
                className={inputClassName}
                name={inputName}
                type={type}
                minLength={minLength}
                maxLength={maxLength}
                required={required}
                placeholder={placeHolder}
                value={value}
                onChange={onChange}/>
            {errorText ? (<span className='field-error'>{errorText}</span>) : null}
        </>
    );
}

export default Field;
