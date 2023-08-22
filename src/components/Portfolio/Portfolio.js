import React from 'react';

import './Portfolio.css';
import {Link} from 'react-router-dom';

function Portfolio({className: mixinClass}) {

  const className = `portfolio ${mixinClass}`;

  return (
    <section className={className}>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__items-container'>
        <li className='portfolio__item'>
          <Link className='portfolio__item-link portfolio__item-link_with-bottom-divider'
                to='https://github.com/ruslan-mihalev/how-to-learn' target='_blank'>Статичный сайт
            <span className='portfolio__item-icon'>↗</span></Link>

        </li>
        <li className='portfolio__item'>
          <Link className='portfolio__item-link portfolio__item-link_with-bottom-divider'
                to='https://github.com/ruslan-mihalev/russian-travel' target='_blank'>Адаптивный сайт
            <span className='portfolio__item-icon'>↗</span></Link>

        </li>
        <li className='portfolio__item'>
          <Link className='portfolio__item-link'
                to='https://github.com/ruslan-mihalev/react-mesto-api-full-gha' target='_blank'>Одностраничное
            приложение
            <span className='portfolio__item-icon'>↗</span></Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
