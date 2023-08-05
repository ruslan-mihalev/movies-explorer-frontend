import React from 'react';

import './Register.css';
import Auth from '../Auth/Auth';
import InputField from '../InputField/InputField';

function Register() {
    return (
        <Auth
            title='Добро пожаловать!'
            submitButtonText='Зарегистрироваться'
            onSubmitClick={() => {}}
            linkLabel='Уже зарегистрированы?'
            linkText='Войти'
            linkPath='/signin'
        >
            <InputField labelText='Имя' type='text' />
            <InputField labelText='E-mail' type='email' />
            <InputField labelText='Пароль' type='password' errorText='Что-то пошло не так...' />
        </Auth>
    );
}

export default Register;