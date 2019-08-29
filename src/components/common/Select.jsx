import React from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';

const Select = props => {

  const { options, handler } = props;
  return (
    <Input type="select" name="select" id="select" onChange={handler}>
      {
        options.map((i) => <option key={i}>{i}</option>)
      }
    </Input>
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handler: PropTypes.func.isRequired,
};

export default Select;
