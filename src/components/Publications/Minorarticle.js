import React from 'react';
import PropTypes from 'prop-types';

import Cell from './Minor/Cell';

const Minor = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>Minor contributions</h3>
    </div>
    {data.map((article) => (
      <Cell
        data={article}
        key={article.school}
      />
    ))}
  </div>
);

Minor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Minor.defaultProps = {
  data: [],
};

export default Minor;
