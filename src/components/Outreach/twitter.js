import React from 'react';
import PropTypes from 'prop-types';

import Cell2 from './Cell2';

const Twitter = ({ data }) => (
  <div className="twitter">
    <div className="link-to" id="twitter" />
    <div className="title">
      <h3>Posts</h3>
    </div>
    {data.map((twitter) => (
      <Cell2
        data={twitter}
      />
    ))}
  </div>
);

Twitter.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    journal: PropTypes.string,
    image: PropTypes.string,
    twitter: PropTypes.string,
    link: PropTypes.string,
    date: PropTypes.number,
    desc: PropTypes.string,
  })),
};

Twitter.defaultProps = {
  data: [],
};

export default Twitter;
