import React from 'react';
import PropTypes from 'prop-types';

import Cell from './First/Cell';

const First = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>First author articles</h3>
    </div>
    {data.map((article) => (
      <Cell
        data={article}
        key={article.school}
      />
    ))}
  </div>
);

First.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

First.defaultProps = {
  data: [],
};

export default First;
