
import React from 'react';
import PropTypes from 'prop-types';

const Enumeration = (props) => {
  const { num } = props;
  return (
    <header>
      <div className="ennumeration">
        <span className="section-number">{num}</span>
      </div>
      <h2>Membership</h2>
    </header>
  );
};
Enumeration.propTypes = {
  num: PropTypes.string.isRequired,
}
export default Enumeration;
