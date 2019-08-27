import React from 'react';
import { Button } from 'reactstrap';

const Btn = props => {
  const { className, children } = props;
  return <Button className={className}>{children}</Button>;
};

export default Btn;
