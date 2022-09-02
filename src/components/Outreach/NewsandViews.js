import React from 'react';
import PropTypes from 'prop-types';

import NaV from './NaV';

const NewsandViews = ({ data }) => (
  <div className="NewsandViews">
    <div className="link-to" id="Newsandiews" />
    <div className="title">
      <h3>News and Views</h3>
    </div>
    {data.map((image) => (
      <NaV
        data={image}
      />
    ))}
  </div>
);

NewsandViews.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    twitter: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

NewsandViews.defaultProps = {
  data: [],
};

export default NewsandViews;
