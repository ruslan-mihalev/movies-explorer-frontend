import React from 'react';
import './AccountTitle.css';

function AccountTitle({ children }) {
    return (<h1 className='account-title'>{children}</h1>);
}

export default AccountTitle;