import React from 'react';
import './Summary.css';
import { Link } from 'react-router-dom';
import SimpleText from '../SimpleText/SimpleText';
import myPhoto from '../../images/my_photo.jpeg';

function Summary({ className: mixinClass }) {
    const className = `summary ${mixinClass}`;

    return (
        <div className={className}>
            <div className="summary__info-container">
                <div className='summary__personal-info-container'>
                    <p className='summary__name'>Виталий</p>
                    <p className='summary__brief-info'>Фронтенд-разработчик, 30 лет</p>
                    <SimpleText className='summary__detail-info'>Я родился и живу в Саратове, закончил факультет
                        экономики
                        СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал
                        кодить. С
                        2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал
                        заниматься фриланс-заказами и ушёл с постоянной работы.</SimpleText>
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