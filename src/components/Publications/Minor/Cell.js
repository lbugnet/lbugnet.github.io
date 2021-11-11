import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <h3><a href={data.link}>{data.subtitle}</a></h3>
        <h3><i href={data.link}>{data.journal}</i></h3>
        <h3><ins href={data.link}>{data.desc}</ins></h3>
        <time className="published">{dayjs(data.date).format('YYYY')}</time>
      </header>
    </article>
  </div>
);
Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    journal: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    supl: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
