import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import helpIcon from '../icons/helpIcon';

const TopNav = () => (
  <Navbar className="topnav d-flex flex-row justify-content-between flex-nowrap">
    <NavbarBrand href="https://www.ascap.com/" className="p-0">
      <img
        src="https://ome.ascap.com/img/ASCAP_Note_Horizontal_Black.402e8647.png"
        alt="logo-note"
        id="ascap-note"
      />
      <img
        src="https://ome.ascap.com/img/ASCAP_Logo_Horizontal_White.933d9b09.png"
        alt="logo"
        id="ascap-logo"
      />
    </NavbarBrand>
    <h3 className="mb-0">Membership Application</h3>
    <a href="https://www.ascap.com/helpcenter" className="helpcenter">
      <div className="help-btn">Looking for help?</div>
      <div className="help-icon">{helpIcon}</div>
    </a>
  </Navbar>
);

export default TopNav;
