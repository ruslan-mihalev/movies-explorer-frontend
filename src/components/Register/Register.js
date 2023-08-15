import React, {useCallback} from 'react';

import Auth from '../Auth/Auth';
import InputField from '../InputField/InputField';
import {useForm} from '../../utils/hooks/useForm';

function Register({isLoading, onRegister}) {
    const {values, handleChange} = useForm({name: '', email: '', password: ''});

    const handleSubmit = useCallback(() => {
        onRegister(values);
    }, [onRegister, values.name, values.email, values.password]);

    return (
        <Auth
            formName='register-form'
            title='Добро пожаловать!'
            submitButtonText='Зарегистрироваться'
            onSubmitClick={handleSubmit}
            linkLabel='Уже зарегистрированы?'
            linkText='Войти'
            linkPath='/signin'
            isLoading={isLoading}
        >
            <InputField labelText='Имя' type='text' required={true}
                        inputName='name' inputId='register-name'
                        value={values.name} onChange={handleChange}
                        disabled={isLoading}/>
            <InputField labelText='E-mail' type='email' required={true}
                        inputName='email' inputId='register-email'
                        value={values.email} onChange={handleChange}
                        disabled={isLoading}/>
            <InputField labelText='Пароль' type='password' required={true}
                        inputName='password' inputId='register-password'
                        value={values.password} onChange={handleChange}
                        errorText='Что-то пошло не так...'
                        disabled={isLoading}/>
        </Auth>
    );
}

export default Register;