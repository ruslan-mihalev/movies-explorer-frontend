import React, { useCallback, useState } from 'react';

import './Profile.css';
import Header from '../Header/Header';
import OutlineButton from '../OutlineButton/OutlineButton';
import AccountTitle from '../AccountTitle/AccountTitle';
import StaticField from '../StaticField/StaticField';
import SubmitButton from '../SubmitButton/SubmitButton';
import InputField from '../InputField/InputField';

function Profile({ name }) {

    const [isModeEdit, setIsModeEdit] = useState(false);
    const [profileUpdateError] = useState('При обновлении профиля произошла ошибка.');

    const handleSaveChangesClick = useCallback(() => {
        setIsModeEdit(false);
    }, []);

    const handleEditProfileClick = useCallback(() => {
        setIsModeEdit(true);
    }, []);

    return (
        <main className='profile'>
            <Header/>
            <div className='profile__container'>
                <section className='profile__content'>
                    <AccountTitle>Привет, {name}!</AccountTitle>
                    {isModeEdit ? (
                        <form className='profile__form' name='edit-profile-form'>
                            <fieldset className='profile__fields-container'>
                                <InputField labelText='Имя' type='text' required={true}
                                            inputName='name' inputId='edit-name'
                                            value='Виталий' onChange={(text) => {
                                }}/>
                                <InputField labelText='E-mail' type='email' required={true}
                                            inputName='email' inputId='edit-email'
                                            value='pochta@yandex.ru' onChange={(text) => {
                                }}/>
                            </fieldset>

                            <div className='profile__buttons'>
                                {profileUpdateError ? (
                                    <p className='profile__update-error'>{profileUpdateError}</p>) : null}
                                <SubmitButton className='profile__save-button' text='Сохранить'
                                              onClick={handleSaveChangesClick}></SubmitButton>
                            </div>
                        </form>
                    ) : (
                        <div className='profile__form'>
                            <div className='profile__fields-container'>
                                <StaticField className='profile__name-field'
                                             labelText='Имя' value='Виталий'/>
                                <StaticField className='profile__email-field'
                                             labelText='E-mail' value='pochta@yandex.ru'/>
                            </div>

                            <div className='profile__buttons'>
                                <OutlineButton className='profile__edit-button' text='Редактировать'
                                               onClick={handleEditProfileClick}/>
                                <OutlineButton className='profile__logout-button' text='Выйти из аккаунта'
                                               onClick={() => {}}/>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}

export default Profile;