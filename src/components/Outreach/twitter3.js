import React from 'react';
import PropTypes from 'prop-types';

import Cell3 from './Cell3';

const Twitter3 = ({ data }) => (
  <div className="twitter">
    <div className="link-to" id="twitter" />
    {data.map((twitter3) => (
      <Cell3
        data={twitter3}
      />
    ))}
  </div>
);

Twitter3.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    twitter: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Twitter3.defaultProps = {
  data: [],
};

export default Twitter3;
