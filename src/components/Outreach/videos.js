import React from 'react';
import PropTypes from 'prop-types';

import Cell from './Cell';

const Video = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>Recorded Outreach events (in French)</h3>
    </div>
    {data.map((article) => (
      <Cell
        data={article}
        key={article.school}
      />
    ))}
  </div>
);

Video.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Video.defaultProps = {
  data: [],
};

export default Video;
