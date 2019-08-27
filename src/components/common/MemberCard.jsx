import React from 'react';
import {
  Card, CardHeader, CardBody, CardText,
} from 'reactstrap';

import {
  checkIcon,
} from '../icons';


const MemberCard = (props) => {
  console.log(props);
  const { data } = props;
  const { title, copy, fee, icon } = data;
  return (

    <Card>
      <CardHeader className="font-medium d-flex justify-content-center">
        {/* {icon} */}
        <span className="ml-2">{title}</span>
      </CardHeader>
      <CardBody>
        <CardText>
          {copy}
        </CardText>
        <h4 className="font-bold">$100 Application Fee</h4>
        <p className="sub-text mb-3">non-refundable</p>
        <h5>Requirements</h5>
        <ul>
          <li>
            {checkIcon}
            <span className="pl-2">Legal Name</span>
          </li>
          <li>
            {checkIcon}
            <span className="pl-2">Mailing Address</span>
          </li>
          <li>
            {checkIcon}
            <span className="pl-2">Valid Email Address</span>
          </li>
          <li>
            {checkIcon}
            <span className="pl-2">SSN/ITIN or EIN</span>
          </li>
          <li>
            {checkIcon}
            <span className="pl-2">Must be 18 or older*</span>
          </li>
        </ul>
      </CardBody>
    </Card>
  );
};

export default MemberCard;
