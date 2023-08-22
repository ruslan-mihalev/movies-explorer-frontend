import React from 'react';
import './Logo.css';
import {NavLink} from 'react-router-dom';

function Logo() {
  return (<NavLink to='/' className='logo'/>);
}

export default Logo;
