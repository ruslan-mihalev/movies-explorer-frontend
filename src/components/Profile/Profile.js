import React from 'react';

import './Profile.css';
import Header from "../Header/Header";
import OutlineButton from "../OutlineButton/OutlineButton";
import AccountTitle from "../AccountTitle/AccountTitle";

function Profile({name}) {
    return (
        <div className='profile'>
            <Header/>
            <div className='profile__container'>
                <div className='profile__content'>
                    <AccountTitle>Привет, {name}!</AccountTitle>
                    <div className='profile__buttons'>
                        <OutlineButton text='Редактировать' onClick={() => {}}/>
                        <OutlineButton text='Выйти из аккаунта' onClick={() => {}} style='danger'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;