import React from 'react';
import PropTypes from 'prop-types';

import Cell from './Major/Cell';

const Major = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>Major contributions</h3>
    </div>
    {data.map((article) => (
      <Cell
        data={article}
        key={article.school}
      />
    ))}
  </div>
);

Major.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Major.defaultProps = {
  data: [],
};

export default Major;
