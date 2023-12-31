import React from 'react';
import './Summary.css';
import {Link} from 'react-router-dom';
import SimpleText from '../SimpleText/SimpleText';
import myPhoto from '../../images/my_photo.jpeg';

function Summary({className: mixinClass}) {
  const className = `summary ${mixinClass}`;

  return (
    <div className={className}>
      <div className="summary__info-container">
        <div className='summary__personal-info-container'>
          <p className='summary__name'>Руслан</p>
          <p className='summary__brief-info'>Фронтенд-разработчик, 34 лет</p>
          <SimpleText className='summary__detail-info'>Учился в Казани. Начинал карьеру там-же. После переехал в Москву.
            Начинал как мобильный разработчик, сейчас плавно перехожу в фулстек.
          </SimpleText>
        </div>
        <Link className='summary__social-link' to='https://github.com/ruslan-mihalev' target='_blank'>Github</Link>
      </div>
      <div className='summary__photo-container'>
        <img className='summary__photo' src={myPhoto} alt='Личное фото'/>
      </div>
    </div>
  );
}

export default Summary;
