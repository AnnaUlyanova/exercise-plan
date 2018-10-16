import React from 'react';
import PropTypes from 'prop-types';

const Entry = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

Entry.propTypes = {
// eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.object.isRequired,
};

export default Entry;
