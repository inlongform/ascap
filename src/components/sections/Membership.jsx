import React, { Component } from 'react';
import { Row, Col, CardText } from 'reactstrap';
import PropTypes from 'prop-types';
import {
  MemberCard, Btn, Select, Enumeration, ErrorText,
} from '../common';

import data from '../data/data';

class Membership extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: '',
      publisherSelect: '',
      selectVisible: false,
      cardError: false,
      selectError: false,
    };
    this.cardClick = this.cardClick.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.validate = this.validate.bind(this);
  }


  onSelectChange(e) {
    this.setState({
      publisherSelect: e.target.value,
      selectError: false,
    });
  }

  cardClick(id) {
    const { membership } = data;
    const { cards } = membership;

    const filtered = cards.filter((i) => i.header.id === id)[0];

    this.setState({
      selected: id,
      selectVisible: filtered.showSelect,
      cardError: false,
    });
  }

  validate(e) {
    e.preventDefault();
    const { selected, publisherSelect, selectVisible } = this.state;

    if (selected === '') {
      this.setState({
        cardError: true,
      });

      return;
    }

    if (publisherSelect === '' && selectVisible) {
      this.setState({
        selectError: true,
      });

      return;
    }

    alert('all done');
  }

  render() {
    const { sectionNum } = this.props;
    const { membership } = data;
    const {
      cards, age, tincheck, publisherOptions,
    } = membership;
    const {
      selected, selectVisible, cardError, selectError,
    } = this.state;


    return (
      <section>
        <Enumeration num={sectionNum} />
        <p className="pb-4">Select your membership type below:</p>
        <Row className={`mb-2 card-container ${(cardError) ? 'error' : ''}`}>
          {
            cards.map((i) => (
              <Col lg="4" key={i.header.title} className="card-bottom-margin">
                <MemberCard handler={this.cardClick} headerData={i.header} selectedId={selected}>
                  <CardText>
                    {i.copy}
                  </CardText>
                  <h4 className="font-bold">
                    {i.fee} Application Fee
                  </h4>
                  {i.requirements}
                </MemberCard>
              </Col>
            ))
          }
        </Row>
        <Row>
          <Col>
            {
            (cardError) ? (
              <ErrorText text="Please select your membership type." />
            ) : null
            }

            {age}
            {
              (selectVisible) ? (
                <div className="publisher-select-container">
                  <h4>Publisher Company Type</h4>
                  <p className="mb-0">Please select the federal tax classification of your publisher company.</p>
                  <Row className="select-container">
                    <Col lg="8">
                      <Select options={publisherOptions} handler={this.onSelectChange} />

                      {
                        (selectError) ? (
                          <ErrorText text="Please select your publisher company type." />
                        ) : null
                      }
                    </Col>
                  </Row>
                </div>
              ) : null
            }
            {tincheck}
            <div className="mt-4">
              <Btn classNames="cancel" href="https://www.ascap.com/">Cancel</Btn>
              <Btn handler={this.validate}>Continue</Btn>
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}

Membership.defaultProps = {
  sectionNum: '1',
};

Membership.propTypes = {
  sectionNum: PropTypes.string,
};

export default Membership;
