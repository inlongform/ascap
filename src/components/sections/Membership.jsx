import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';
import MemberCard from '../common/MemberCard';
import Btn from '../common/Btn';
import data from '../../data/data';

class Membership extends PureComponent {
  render() {
    return (
      <section>
        <h2 className="font-black">Membership</h2>
        <p className="pb-4">Select your membership type below:</p>
        <Row className="mb-4">
          {
            data.map((i) => (
              <Col lg="4" key={i.title}>
                <MemberCard data={i} />
              </Col>
            ))
          }
        </Row>
        <Row>
          <Col>
            <p className="font-small">
              *If you are under 18 years of age please&nbsp;
              <a
                href="/helpcenter#underAge"
                target="_blank"
                rel="noopener noreferrer"
              >
                read more about how to join ASCAP.
              </a>
            </p>
            <p className="font-small">
              ASCAP uses TINCheck and SmartyStreets to verify certain
              information provided by you in connection with your application.
              Any information processed by TINCheck and SmartyStreets shall be
              subject to the privacy policies of
              {' '}
              <a
                href="https://www.tincheck.com/pages/tincheck-agreement"
                rel="noopener noreferrer"
                target="_blank"
              >
                TINCheck
              </a>
              {' '}
              and
              {' '}
              <a
                href="https://smartystreets.com/legal/privacy-policy"
                rel="noopener noreferrer"
                target="_blank"
              >
                SmartyStreets
              </a>
              .
            </p>
            <div>
              <Btn className="cancel">Cancel</Btn>
              <Btn>Continue</Btn>
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}

export default Membership;
