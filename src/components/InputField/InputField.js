import React from 'react';

import './InputField.css';

function InputField({
                        labelText,
                        required,
                        inputName,
                        inputId,
                        type,
                        placeHolder,
                        minLength = null,
                        maxLength = null,
                        value,
                        onChange,
                        errorText
                    }) {

    const inputClassName = `input-field ${errorText ? 'input-field_errored' : ''}`;
    const spanClassName = `input-field-error ${inputId}-error`;
    return (
        <>
            <label className='input-field-label'>{labelText}</label>
            <input
                className={inputClassName}
                name={inputName}
                id={inputId}
                type={type}
                minLength={minLength}
                maxLength={maxLength}
                required={required}
                placeholder={placeHolder}
                value={value}
                onChange={onChange}/>
            {errorText ? (<span className={spanClassName}>{errorText}</span>) : null}
        </>
    );
}

export default InputField;
