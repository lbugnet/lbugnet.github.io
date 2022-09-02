import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const NaV = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <h3><a href={data.link}>{data.subtitle}</a></h3>
        <time className="published">{dayjs(data.date).format('YYYY')}</time>
      </header>
      <a href={data.link} align="center" className="image">
        <img width="600" src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

NaV.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string,
    video: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};
export default NaV;
