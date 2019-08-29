import React from 'react';
import {
  checkIcon,
} from '../icons';

export default (
  <>
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
  </>
);
