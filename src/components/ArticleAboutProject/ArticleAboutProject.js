import React from 'react';
import './ArticleAboutProject.css';
import SimpleText from '../SimpleText/SimpleText';

function ArticleAboutProject({className: mixinClass, title, description}) {
  const className = `article-about-project ${mixinClass}`;

  return (
    <article className={className}>
      <h3 className='article-about-project__title'>{title}</h3>
      <SimpleText className='article-about-project__text'>{description}</SimpleText>
    </article>
  );
}

export default ArticleAboutProject;
