import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <p><h4><a href={data.link}>{data.subtitle}</a></h4></p>
        <pex1><i href={data.link}>{data.desc}</i></pex1>
        <p> </p>
        <time className="published">{dayjs(data.date).format('YYYY')}</time>
        <p><i href={data.link}>{data.journal}</i></p>
      </header>
      {/* <div className="description">
        <p>{data.desc}</p>
        <p>{data.supl}</p>
      </div> */}
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    journal: PropTypes.string.isRequired,
    link: PropTypes.string,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    supl: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
