import React from 'react';
import PropTypes from 'prop-types';
import {
  checkIcon,
} from '../icons';

const Requirements = (props) => {
  const { data } = props;

  return (
    <>
      <p className="sub-text mb-3">non-refundable</p>
      <h5>Requirements</h5>
      <ul>
        {
          data.map((i) => (
            <li key={i}>
              {checkIcon}
              <span className="pl-2">{i}</span>
            </li>
          ))
        }
      </ul>
    </>
  );
};

Requirements.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Requirements;
