/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const ErrorText = (props) => (
  <p className="error-text">
    { props.text }
  </p>
);

ErrorText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ErrorText;
