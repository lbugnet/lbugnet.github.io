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
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <a href={data.link} className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>
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
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    supl: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
