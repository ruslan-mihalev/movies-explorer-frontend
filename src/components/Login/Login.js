import React, {useCallback} from 'react';

import Auth from '../Auth/Auth';
import InputField from '../InputField/InputField';
import {useForm} from '../../utils/hooks/useForm';

function Login({isLoading, onLogin}) {
    const {values, handleChange} = useForm({email: '', password: ''})

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
            isLoading={isLoading}
        >
            <InputField labelText='E-mail' type='email' required={true}
                        inputName='email' inputId='login-email'
                        value={values.email} onChange={handleChange}
                        disabled={isLoading}/>
            <InputField labelText='Пароль' type='password' required={true}
                        inputName='password' inputId='login-password'
                        value={values.password} onChange={handleChange}
                        disabled={isLoading}/>
        </Auth>
    );
}

export default Login;