import React from 'react';

import './InputField.css';

function InputField({
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

    const inputClassName = `input-field ${ errorText ? 'input-field_errored' : ''}`;
    return (
        <>
            <label className='input-field-label'>{labelText}</label>
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
            {errorText ? (<span className='input-field-error'>{errorText}</span>) : null}
        </>
    );
}

export default InputField;
