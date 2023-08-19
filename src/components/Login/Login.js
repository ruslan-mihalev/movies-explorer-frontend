import React, {useCallback} from 'react';

import Auth from '../Auth/Auth';
import InputField from '../InputField/InputField';
import {useFormWithValidation} from "../../utils/hooks/useFormWithValidation";

function Login({isLoading, serverError, onLogin}) {
    const {values, errors, handleChange, isFormValid} = useFormWithValidation({email: '', password: ''})

    const handleSubmit = useCallback(() => {
        onLogin(values);
    }, [onLogin, values.email, values.password]);

    return (
        <Auth
            formName='login-form'
            title='Рады видеть!'
            submitButtonText='Войти'
            onSubmitClick={handleSubmit}
            linkLabel='Ещё не зарегистрированы?'
            linkText='Регистрация'
            linkPath='/signup'
            isLoading={isLoading || !isFormValid}
            serverError={serverError}
        >
            <InputField labelText='E-mail' type='email' required={true}
                        inputName='email' inputId='login-email'
                        value={values.email} onChange={handleChange}
                        disabled={isLoading} errorText={errors.email}/>
            <InputField labelText='Пароль' type='password' required={true}
                        inputName='password' inputId='login-password'
                        value={values.password} onChange={handleChange}
                        disabled={isLoading}
                        minLength={8} errorText={errors.password}/>
        </Auth>
    );
}

export default Login;