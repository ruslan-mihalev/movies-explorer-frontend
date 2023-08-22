import React, {useCallback} from 'react';

import Auth from '../Auth/Auth';
import InputField from '../InputField/InputField';
import {useFormWithValidation} from "../../utils/hooks/useFormWithValidation";

function Register({isLoading, serverError, onRegister}) {
  const {values, errors, handleChange, isFormValid} = useFormWithValidation({name: '', email: '', password: ''});

  const handleSubmit = useCallback(() => {
    onRegister({...values, email: values.email.trim().toLowerCase()});
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
      isLoading={isLoading || !isFormValid}
      serverError={serverError}
    >
      <InputField labelText='Имя' type='text' required={true}
                  inputName='name' inputId='register-name'
                  value={values.name} onChange={handleChange}
                  disabled={isLoading}
                  minLength={2} maxLength={30} errorText={errors.name} pattern={"[A-Za-zА-Яа-яËё ]+"}/>
      <InputField labelText='E-mail' type='email' required={true}
                  inputName='email' inputId='register-email'
                  value={values.email} onChange={handleChange}
                  disabled={isLoading} errorText={errors.email}
                  pattern="[\w\-+*\/=.!?'#%&\$\^\`~\{\|\}]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-]{2,4}"/>
      <InputField labelText='Пароль' type='password' required={true}
                  inputName='password' inputId='register-password'
                  value={values.password} onChange={handleChange}
                  disabled={isLoading}
                  minLength={8} errorText={errors.password}/>
    </Auth>
  );
}

export default Register;
