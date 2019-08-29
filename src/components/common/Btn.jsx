import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

const Btn = (props) => {
  const {
    classNames, children, href, handler,
  } = props;


  return (
    <>
      {
      (href) ? (
        <Button
          className={classNames}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = href;
          }}
        >{children}
        </Button>
      )
        : <Button className={classNames} onClick={handler}>{children}</Button>
    }
    </>
  );
};

Btn.defaultProps = {
  classNames: '',
  href: null,
  handler: null,
};

Btn.propTypes = {
  classNames: PropTypes.string,
  children: PropTypes.string.isRequired,
  handler: PropTypes.func,
  href: PropTypes.string,
};

export default Btn;
