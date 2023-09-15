import React from 'react';

import icon from '../../assets/images/icon-earth.svg';
import '../Header/Header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <img src={icon} alt='logo' />
        <p>my travel journal.</p>
      </div>
    </div>
  );
}
