import React, {useCallback, useContext, useEffect} from 'react';

import './Profile.css';
import Header from '../Header/Header';
import OutlineButton from '../OutlineButton/OutlineButton';
import AccountTitle from '../AccountTitle/AccountTitle';
import StaticField from '../StaticField/StaticField';
import SubmitButton from '../SubmitButton/SubmitButton';
import InputField from '../InputField/InputField';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import {useFormWithValidation} from "../../utils/hooks/useFormWithValidation";

function Profile({isLoading, serverError, isEditMode, onUpdateProfile, onTurnEditModeOnClick, onSignOutClick}) {

  const currentUser = useContext(CurrentUserContext);

  const {values, errors, setValues, handleChange, isFormValid} = useFormWithValidation({
    name: currentUser?.name,
    email: currentUser?.email
  });

  useEffect(() => {
    if (currentUser?.name && currentUser?.email) {
      setValues({
        name: currentUser?.name,
        email: currentUser?.email
      });
    }
  }, [setValues, currentUser?.name, currentUser?.email]);

  const handleProfileChangesSubmit = useCallback((e) => {
    e.preventDefault();
    onUpdateProfile({...values, email: values.email.trim().toLowerCase()})
  }, [onUpdateProfile, values.name, values.email]);

  const isValuesEqual = () => {
    return values.name === currentUser.name && values.email === currentUser.email;
  };

  return (
    <main className='profile'>
      <Header/>
      <section className='profile__content'>
        {isEditMode ? (
          <form
            className='profile__form'
            name='edit-profile-form'
            onSubmit={handleProfileChangesSubmit}
            noValidate={true}
          >
            <div className='profile__title-container'>
              <AccountTitle>Привет, {currentUser?.name}!</AccountTitle>
            </div>
            <fieldset className='profile__fields-container'>
              <InputField labelText='Имя' type='text' required={true}
                          inputName='name' inputId='edit-name'
                          value={values.name} onChange={handleChange}
                          disabled={isLoading}
                          minLength={2} maxLength={30} errorText={errors.name}/>
              <InputField labelText='E-mail' type='email' required={true}
                          inputName='email' inputId='edit-email'
                          value={values.email} onChange={handleChange}
                          disabled={isLoading} errorText={errors.email}
                          pattern="[\w\-+*\/=.!?'#%&\$\^\`~\{\|\}]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-]{2,4}"/>
            </fieldset>

            <fieldset className='profile__buttons-container'>
              {serverError ? (
                <p className='profile__update-error'>{serverError}</p>) : null}
              <SubmitButton
                className='profile__save-button'
                text='Сохранить'
                disabled={isLoading || !isFormValid || isValuesEqual()}
              />
            </fieldset>
          </form>
        ) : (
          <div className='profile__form'>
            <div className='profile__title-container'>
              <AccountTitle>Привет, {currentUser?.name}!</AccountTitle>
            </div>

            <div className='profile__fields-container'>
              <StaticField className='profile__name-field'
                           labelText='Имя' value={currentUser?.name}/>
              <StaticField className='profile__email-field'
                           labelText='E-mail' value={currentUser?.email}/>
            </div>

            <div className='profile__buttons-container'>
              <OutlineButton
                className='profile__edit-button'
                text='Редактировать'
                onClick={onTurnEditModeOnClick}
                disabled={isLoading}
              />
              <OutlineButton
                className='profile__logout-button'
                text='Выйти из аккаунта'
                onClick={onSignOutClick}
                disabled={isLoading}
              />
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default Profile;
