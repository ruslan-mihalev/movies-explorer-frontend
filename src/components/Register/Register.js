import React from 'react';

import './Register.css';
import Auth from '../Auth/Auth';
import InputField from '../InputField/InputField';

function Register() {
    return (
        <Auth
            formName='register-form'
            title='Добро пожаловать!'
            submitButtonText='Зарегистрироваться'
            onSubmitClick={() => {
            }}
            linkLabel='Уже зарегистрированы?'
            linkText='Войти'
            linkPath='/signin'
        >
            <InputField labelText='Имя' type='text' required={true} inputName='register-name'/>
            <InputField labelText='E-mail' type='email' required={true} inputName='register-email'/>
            <InputField labelText='Пароль' type='password' errorText='Что-то пошло не так...' required={true}
                        inputName='register-password'/>
        </Auth>
    );
}

export default Register;