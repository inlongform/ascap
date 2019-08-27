import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Form, Row, Col, Card } from 'reactstrap';
import TopNav from './topnav/TopNav';


class App extends PureComponent {
  render() {


    return (
      <main>
        <TopNav />
        <Container>
          <Form>
            <section>
              <h2>Membership</h2>
              <p className="pb-4">Select your membership type below:</p>
              <Row>
                <Col lg="4">
                  <Card>hello</Card>
                </Col>
              </Row>
            </section>
          </Form>
        </Container>
      </main>
    );
  }
}

App.propTypes = {
  // showComplete: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);
