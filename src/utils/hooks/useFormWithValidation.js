import {useCallback, useState} from "react";

function useFormWithValidation(inputValues = {}) {
    const [values, setValues] = useState(inputValues);
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const handleChange = (event) => {
        const {name, value, validationMessage} = event.target;
        const isValid = event.target.validity.valid;
        setValues({...values, [name]: value});
        setErrors({...errors, [name]: (isValid ? '' : validationMessage)});
        setIsFormValid(event.target.closest('form').checkValidity());
    };

    const resetForm = useCallback(() => {
        setValues({});
        setErrors({});
        setIsFormValid(false);
    }, []);

    return {values, errors, handleChange, setValues, isFormValid, resetForm};
}

export {useFormWithValidation};