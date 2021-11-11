import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell2 = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <h3><a href={data.link}>{data.subtitle}</a></h3>

        <time className="published">{dayjs(data.date).format('YYYY')}</time>
      </header>
      <a href={data.link} className="twitter">
        <blockquote className="twitter-tweet">
          <p lang="fr" dir="ltr">[ScienceLoop] Le Soleil : le rire des étoiles [3/3] (feat. les limbes mystiques de la voix off)
            <a href="https://t.co/1enmEiypnG">https://t.co/1enmEiypnG</a>
          </p>&mdash;
          Sébastien Carassou 🌎 (@FlashCordon)
          <a href={data.twitter}>December 18, 2020
          </a>
        </blockquote>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);
Cell2.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell2;
